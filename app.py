from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/map")
def rental():
    """Renders Rental Map"""
    return render_template("map.html")

@app.route("/mhi")
def mhi():
    """Renders MHI Graphs"""
    return render_template("mhi.html")

@app.route("/bar")
def bar():
    """Renders MHI Graphs"""
    return render_template("bar.html")

@app.route("/end")
def end():
    """Renders Conclusion Page"""
    return render_template("conclusion.html")



if __name__ == '__main__':
    app.run(debug=True)
