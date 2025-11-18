#include <stdio.h>
#include <stdlib.h>

// # 1.2 Passing Addresses of Structure Members (i.e., Pass-by-reference).
// ---

// Below is a defined struct named student.
struct student
{
    char name[30];
    int age;
    int roll_number;
    float marks;
};

// Below is some struct related function.
void printDetails(char *name, int *age, int *roll, float *marks)
{
    printf("Name: %s\n", name);
    printf("Age: %d\n", *age); // dereference age.
    printf("Roll Number: %d\n", *roll);
    printf("Marks: %.2f\n", *marks); // .2f indicates this format specifier of float will round up to keep only two digits after the decimal.
}

// Now, here comes the main function utilizing the struct and the related function defined above.
int main()
{
    // Declaring an struct/Object.
    struct student s1;

    // Taking user input to initialize an struct.
    printf("Enter student name: ");
    scanf("  %[^\n]", s1.name);
    printf("Welcome '%s', please enter your age: ", s1.name);
    scanf(" %d", &s1.age);
    printf("Please enter your roll no. and marks: ");
    scanf(" %d %f", &s1.roll_number, &s1.marks);

    printDetails(s1.name, &s1.age, &s1.roll_number, &s1.marks);

    return 0;
}
