import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping

data = pd.read_csv('./IoTProcessedDataProcessed.csv')
data['date'] = pd.to_datetime(data['date'])

features = data[['tempreature', 'humidity', 'water_level']]
targets = data[['Fan_actuator_ON', 'Watering_plant_pump_ON', 'Water_pump_actuator_ON']]

scaler = MinMaxScaler()
features_scaled = scaler.fit_transform(features)

def create_sequences(data, targets, time_steps=1):
    X, y = [], []
    for i in range(len(data) - time_steps):
        X.append(data[i:(i + time_steps), :])
        y.append(targets[i + time_steps])
    return np.array(X), np.array(y)

time_steps = 5
X, y = create_sequences(features_scaled, targets.values, time_steps)

model = Sequential()
model.add(LSTM(50, return_sequences=True, input_shape=(X.shape[1], X.shape[2])))
model.add(Dropout(0.2))
model.add(LSTM(50))
model.add(Dropout(0.2))
model.add(Dense(3, activation='sigmoid'))  

model.compile(optimizer='adam', loss='binary_crossentropy')

model.fit(X, y, epochs=100, batch_size=32)

model.save('lstm_model.h5')
print("Model saved as 'lstm_model.h5'")