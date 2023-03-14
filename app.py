from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

DB_URL = ""
# client = MongoClient(DB_URL)
# db = client.dbsparta
 
@app.route('/')
def home():
    return render_template('index.html')

# ============================= 전체 프로필 조회 =============================

# ============================= 프로필 상세보기 =============================

# ============================= 댓글 관련 =============================

# ============================= 프로필 작성 =============================

    
if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
