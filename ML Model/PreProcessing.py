import pandas as pd

file_path = "./IoTProcessed_Data.csv"
data = pd.read_csv(file_path)

print("Original DataFrame:")
print(data.head())

data_cleaned = data.loc[:, ~data.columns.str.endswith('OFF')]

data_cleaned = data_cleaned.drop(columns=['N', 'P', 'K'])

print("\nModified DataFrame (after dropping 'OFF' columns):")
print(data_cleaned.head())

# Export dataset
output_file_path = "./IoTProcessedDataProcessed.csv"  
data_cleaned.to_csv(output_file_path, index=False) 
print(f"Cleaned dataset saved as '{output_file_path}'")