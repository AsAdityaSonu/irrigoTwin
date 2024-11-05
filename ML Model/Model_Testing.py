import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import load_model
import joblib 

model = load_model('lstm_model.h5')

scaler = joblib.load('scaler.pkl')

def predict_targets(input_data):
    input_data_scaled = scaler.transform(input_data)

    time_steps = 5
    sequences = []
    for i in range(len(input_data_scaled) - time_steps + 1):
        sequences.append(input_data_scaled[i:(i + time_steps), :])
    
    sequences = np.array(sequences)

    predictions = model.predict(sequences)

    predictions_binary = (predictions > 0.5).astype(int)
    return predictions_binary

hard_coded_input = np.array([
    [12, 9, 100],
    [32, 62, 21],
    [31, 61, 22],
    [29, 59, 19],
    [28, 58, 18],
    [27, 57, 17],
    [26, 56, 16],
    [25, 55, 15]
])

input_features = pd.DataFrame(hard_coded_input, columns=['tempreature', 'humidity', 'water_level'])

predicted_targets = predict_targets(input_features)

predicted_targets_df = pd.DataFrame(predicted_targets, columns=['Fan_actuator_ON', 'Watering_plant_pump_ON', 'Water_pump_actuator_ON'])
print(predicted_targets_df)