#include <stdio.h>
#include <stdlib.h>

// Well this is a lecture series, where we will understand, what a
// 1. Structure in C is:
// 1.1 Structure is similar to objects in the JS with only difference:
// 1.2 In structure in C, we can't define functions with in the structure.
// 1.3 We define structure related functions separately.
// 2. and How to intertwined structures with the functions.

// ## Now, In this series, we will see how to intertwined structures with the functions.
// 1. Passing Structure Members as Arguments.
// 1.1 Passing structure members as value.
// 1.2 Passing Addresses of Structure Members.

// # 1.1 Passing structure members as value (i.e., Pass-by-Value).
// ---

// ### Below is a defined struct named student.
struct student
{
    char name[20];
    int age;
    int roll_number;
    float marks;
};

// ### Below is some struct related function.
void printDetails(char name[], int age, int roll, float marks)
{
    printf("Name: %s\n", name);
    printf("Age: %d\n", age);
    printf("Roll Number: %d\n", roll);
    printf("Marks: %.2f\n", marks); // .2f indicates this format specifier of float will only keep two digits after the decimal.
}

// ## Now, here comes the **main function** utilizing the struct and the related function defined above.
int main()
{
    struct student s1 = {"Nick", 16, 50, 72.551};

    // **Here we are passing stucture members as a value to the function**.
    printDetails(s1.name, s1.age, s1.roll_number, s1.marks);

    return 0;
}
