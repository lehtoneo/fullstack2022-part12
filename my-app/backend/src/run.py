from app import app
from config import Config

if __name__ == "__main__":
    conf = Config()
    app.run(host='0.0.0.0', port=conf.PORT)