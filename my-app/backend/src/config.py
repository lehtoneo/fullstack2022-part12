import os

class Config:
  DB_URL = os.environ['DB_URL']
  PORT = int(os.environ.get('PORT', 5000))


  
