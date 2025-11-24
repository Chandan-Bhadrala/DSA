#include <iostream>
#include <array>
using namespace std;

// # Find the minimum and maximum values within the array.

std::array<int, 2> maxAndMin(int arr[], int size)
{
    int answer[2] = {0};
    int max = arr[0], min = arr[0];

    for (int i = 0; i < size; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }

    return {max, min}; // return std::array
}

int main()
{

    int size = 0;

    // Before initializing the array get to know its size.
    cout << "Enter the required size of the array: ";
    cin >> size;

    // Initialize array with the size.
    int arr[size] = {0};

    for (int i = 0; i < size; i++)
    {
        cout << "Enter the element at array position " << i + 1;
        cin >> arr[i];
    }

    std::array<int, 2> answer = maxAndMin(arr, size);

    cout << "Maximum = " << answer[0]
         << ", Minimum = " << answer[1] << endl;

    return 0;
}