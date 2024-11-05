import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping
import matplotlib.pyplot as plt

# Load and preprocess the data
data = pd.read_csv('./IoTProcessedDataProcessed.csv')
data['date'] = pd.to_datetime(data['date'])

features = data[['tempreature', 'humidity', 'water_level']]
targets = data[['Fan_actuator_ON', 'Watering_plant_pump_ON', 'Water_pump_actuator_ON']]

# Scale the features
scaler = MinMaxScaler()
features_scaled = scaler.fit_transform(features)

# Function to create sequences
def create_sequences(data, targets, time_steps=1):
    X, y = [], []
    for i in range(len(data) - time_steps):
        X.append(data[i:(i + time_steps), :])
        y.append(targets[i + time_steps])
    return np.array(X), np.array(y)

# Create sequences
time_steps = 5
X, y = create_sequences(features_scaled, targets.values, time_steps)

# Split into training and testing sets
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
y_train, y_test = y[:train_size], y[train_size:]

# Build the model
model = Sequential()
model.add(LSTM(50, return_sequences=True, input_shape=(X_train.shape[1], X_train.shape[2])))
model.add(Dropout(0.2))
model.add(LSTM(50))
model.add(Dropout(0.2))
model.add(Dense(3, activation='sigmoid'))  # Sigmoid activation for binary classification

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model with early stopping
early_stopping = EarlyStopping(monitor='val_loss', patience=5)
model.fit(X_train, y_train, epochs=100, batch_size=32, validation_split=0.2, callbacks=[early_stopping])

# Evaluate the model
loss, accuracy = model.evaluate(X_test, y_test)
print(f'Test Loss: {loss}, Test Accuracy: {accuracy}')

# Make predictions
predictions = model.predict(X_test)

# Convert probabilities to binary predictions
predictions_binary = (predictions > 0.5).astype(int)

# Inverse transform the actual binary values
y_test_inverse = y_test  # No need to inverse transform as they are binary

# Plotting the results for one of the targets
plt.figure(figsize=(15, 6))
plt.plot(y_test_inverse[:, 0], label='Actual Fan Actuator', alpha=0.5)
plt.plot(predictions_binary[:, 0], label='Predicted Fan Actuator', alpha=0.5)
plt.title('Actual vs Predicted Fan Actuator ON')
plt.xlabel('Time Steps')
plt.ylabel('Fan Actuator Status')
plt.legend()
plt.show()