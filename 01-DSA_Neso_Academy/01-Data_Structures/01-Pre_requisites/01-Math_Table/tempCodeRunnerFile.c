#include <stdio.h>
int main()
{
    int num;
    char name[50];
    printf("What's your name dear: ");
    scanf(" %[^\n]", name);
    printf("Welcome '%s'", name);
    printf("\nPlease tell me for what integer you require a math table: ");
    scanf(" %d", &num);

    printf("Your table for number: %d is\n", num);
    for (int i = 1; i <= 10; i++)
    {
        printf("%d X %d = %d\n", num, i, num * i);
    }
    return 0;
}