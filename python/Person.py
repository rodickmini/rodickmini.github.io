class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def greet(self):
    print("Hello, my name is " + self.name)

david = Person("David", 35)
david.greet()

