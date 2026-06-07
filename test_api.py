import requests

BASE_URL = "http://localhost:8080"

response = requests.get(BASE_URL)

print(response.status_code)
print(response.text)