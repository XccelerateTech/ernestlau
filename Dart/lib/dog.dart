class Dog {
  int age = 1;
  String name = "Sam";

  Dog(int age, String name){
    this.age = age;
    this.name = name;
  }

  int ageInDogYears(){
    return age * 7;
  }
}