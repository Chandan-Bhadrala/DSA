#include <stdio.h>
#include <stdlib.h>

// # 3. Passing Entire Structure to a function as a reference using a pointer (i.e., Pass-by-Reference).
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
void printDetails(struct student *xyz)
{
    printf("Name: %s\n", xyz->name);
    printf("Age: %d\n", xyz->age); // dereference age using **arrow** operator.
    printf("Roll Number: %d\n", xyz->roll_number);
    printf("Marks: %.2f\n", xyz->marks); // .2f indicates this format specifier of float will round up to keep only two digits after the decimal.
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

    // Passing structure to a function as a reference.
    printDetails(&s1);

    return 0;
}

// ---
// Chat GPT refinement on my above notes.

// # 3. Passing Entire Structure to a Function as a Reference using a Pointer (i.e., Pass-by-Reference).
// ---
// 1. Instead of sending a copy of the structure, we pass the *address* of the structure.
// 1.1 This gives the function direct access to the original structure's data.
// 1.2 Any modification done inside the function will directly affect the
//     actual structure passed from main.
// 1.3 This removes ambiguity, improves clarity, and is widely used in real-world programs.
//
// **2. Why Pass-by-Reference is Better:**
// 2.1 No separate copy of the structure is created, making it faster and more memory-efficient.
// 2.2 Pointer dereferencing allows the function to work with the structure exactly as if
//     it were dealing with the original object.
// 2.3 The arrow operator (->) is used to access structure members through a pointer,
//     making the syntax cleaner and intuitive.
// ---
