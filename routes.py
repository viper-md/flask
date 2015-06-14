from flask import Flask , render_template ,redirect , flash
from flask import app
from forms import LoginForm


@app.route('/login', methods = ['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for OpenID="' + form.openid.data + '", remember_me=' + str(form.remember_me.data))
        return redirect('/index')
    return render_template('login.html', 
        title = 'Sign In',
        form = form)
        
app = Flask(__name__)
@app.route('/')
def  home():
	return render_template('home.html')
@app.route('/about')
def about():
	
	return render_template('/about.html')

@app.route('/contact')
def contact():
	return render_template('/contact.html')

if __name__ == '__main__':
	app.run(debug=True)
