
# import the standard Django Forms
# from built-in library
from django import forms

# creating a form


class InputForm(forms.Form):

    first_input = forms.CharField(max_length=200)
    second_input = forms.CharField(max_length=200)
