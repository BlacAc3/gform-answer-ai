from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("makingsoup", views.makesoup, name="makesoup"),#only post requests are allowed!
    path("htmx", views.htmx_test, name = "htmx"),
]
