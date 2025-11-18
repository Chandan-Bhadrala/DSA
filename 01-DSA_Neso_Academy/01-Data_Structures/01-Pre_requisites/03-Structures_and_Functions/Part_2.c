#include <stdio.h>
#include <stdlib.h>

// # 2. Passing Entire Structure to a function (i.e., Pass-by-Value).
// ---
// 1. Up till now, we were passing members of the structures, which is neither scalable nor practical.
// 1.1 Passing each individual structure member could easily become cumbersome if the structure members number around 20.
// 1.2 So, it is always better to send the whole structure to the function.
// 1.3 Let the function access the required structure members from the whole passed structure as an argument to the function.
// **2. Drawback:**
// 2.1 In pass-by-value, a copy of the structure is sent to the function.
// 2.1.1 Thus, any modification done by the function in the structure doesn't affect the original passed structure.
// 2.1.2 So, it is mostly beneficial to pass a structure using a reference/pointer.
// 2.1.3 This way, any changes made to the structure by the function also affect the original structure.
// 2.1.4 This way, we can avoid ambiguity in the structure data.
// 2.2 Even passing the structure as a reference is more efficient and faster.
// 2.2.1 Passing a structure by reference removes the need to create a copy of the structure, which saves memory and CPU cycles.
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
void printDetails(struct student xyz)
{
    printf("Name: %s\n", xyz.name);
    printf("Age: %d\n", xyz.age); // dereference age.
    printf("Roll Number: %d\n", xyz.roll_number);
    printf("Marks: %.2f\n", xyz.marks); // .2f indicates this format specifier of float will round up to keep only two digits after the decimal.
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

    printDetails(s1);

    return 0;
}

// ---
// Chat GPT refinement on my above notes.

// # 2. Passing Entire Structure to a Function (i.e., Pass-by-Value).
// ---
// 1. Up till now, we were passing members of the structure individually,
//    which is neither scalable nor practical.
// 1.1 If a structure contains many members (say 20), passing each one
//     separately becomes cumbersome and error-prone.
// 1.2 So, it is always better to pass the entire structure to a function.
// 1.3 The function can simply access whatever members it needs from
//     the structure passed as an argument.
//
// **2. Drawback of Pass-by-Value:**
// 2.1 When passed by value, a *copy* of the structure is sent to the function.
// 2.1.1 Therefore, any modification done inside the function does NOT
//       affect the original structure.
// 2.1.2 Because of this, in real-world scenarios, structures are usually
//       passed by reference (i.e., passing their address).
// 2.1.3 Passing by reference allows the function to modify the original
//       structure and avoids ambiguity in structure data.
// 2.2 Passing by reference is also more efficient.
// 2.2.1 It avoids creating a separate copy of the entire structure, which
//       saves both memory and CPU cycles.
// ---