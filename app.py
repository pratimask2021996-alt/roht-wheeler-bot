from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = "obstacle-avoiding-bot-mis-secret-key"

# Branding identity used across the site (footer, meta tags, floating tag)
SITE_BRAND_TAG = "#infosolution@RohtWheeler.Mis"
SITE_NAME = "Obstacle Avoiding Bot.MIS"


# Home page is reachable at both the standard root URL ("/") and a short,
# clean branded URL alias ("/rohtwheeler") so the browser address bar can
# display a concise link tied to the project identity without breaking
# normal Flask routing conventions or using special characters.
@app.route("/")
@app.route("/rohtwheeler")
def home():
    return render_template(
        "index.html",
        active_page="home",
        brand_tag=SITE_BRAND_TAG,
        site_name=SITE_NAME,
    )


@app.route("/about")
def about():
    return render_template(
        "about.html",
        active_page="about",
        brand_tag=SITE_BRAND_TAG,
        site_name=SITE_NAME,
    )


@app.route("/components")
def components():
    return render_template(
        "components.html",
        active_page="components",
        brand_tag=SITE_BRAND_TAG,
        site_name=SITE_NAME,
    )


@app.route("/preface")
def preface():
    return render_template(
        "preface.html",
        active_page="preface",
        brand_tag=SITE_BRAND_TAG,
        site_name=SITE_NAME,
    )


@app.route("/creds")
def creds():
    return render_template(
        "creds.html",
        active_page="creds",
        brand_tag=SITE_BRAND_TAG,
        site_name=SITE_NAME,
    )


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html", brand_tag=SITE_BRAND_TAG, site_name=SITE_NAME), 404


if __name__ == "__main__":
    app.run(debug=True)
    
