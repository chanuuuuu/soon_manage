from flask import Flask, url_for, render_template, request, redirect, session, jsonify

app = Flask(__name__)

day_dict = {
        '게임':{
            '풍월량' : [67,51,24,88,85,38,89],
            '양팡' : [20,10,30,40,100,10,100],
            '앙헬스띠' : [45,23,43,21,5,54,44]
        },
        '먹방':{
            '벤쯔' : [1,2,3,4,5,6,7],
            '엠브로' : [20,14,30,20,50,56,12],
            '떵개떵' : [34,25,43,85,5,56,44]
        }
    }
weekdict = {
    '게임':{
        '풍월량' : [1,6,5,3,45,5,7],
        '양팡' : [40,100,10,100,20,10,30],
        '앙헬스띠' : [45,23,43,21,5,54,44]
    },
    '먹방':{
        '벤쯔' : [67,51,24,88,85,38,89],
        '엠브로' : [20,14,30,20,50,56,12],
        '떵개떵' : [34,25,43,85,5,56,44]
    }
}

# 1. 홈화면
@app.route('/')
def cover():
    return render_template('cover.html')

# 2. 순정보
@app.route('/state', methods=['GET','POST'])
def state():
    return render_template('state.html', mydict=day_dict['게임'])


# 2. 순모임정보
@app.route('/group', methods=['GET','POST'])
def group():
    return render_template('group.html')


if __name__ == "__main__":
    app.run(debug=True)