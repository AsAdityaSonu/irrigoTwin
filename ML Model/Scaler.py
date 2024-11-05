import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import joblib  # or use pickle

# Load the dataset
data = pd.read_csv('./IoTProcessedDataProcessed.csv')

# Fit the scaler
scaler = MinMaxScaler()
scaler.fit(data[['tempreature', 'humidity', 'water_level']])

# Save the scaler to a file
joblib.dump(scaler, 'scaler.pkl')  # Save the scaler as a pickle file
print("Scaler saved successfully.")