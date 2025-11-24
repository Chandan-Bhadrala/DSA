#include <iostream>
#include <array>
using namespace std;

// # Find the minimum and maximum values within the array.

std::array<int, 2> maxAndMin(int arr[])
{
    int answer[2] = {0};
    int max = arr[0], min = arr[0];

    for (int x : arr)
    {
        if (x > max)
        {
            max = x;
        }
        if (x < min)
        {
            min = x;
        }
    }

    return answer[max, min];
}

int main()
{
    int size = 0;
    int arr[size] = {0};
    cout << "Enter the required size of the array: ";
    cin >> size;

    for (int i = 0; i < size; i++)
    {
        cout << "Enter the element at array position " << i + 1;
        cin >> arr[i];
    }

    int answer[2] = maxAndMin(arr);

    cout << "Maximum and Minimum values with in the given array is: " << answer[0] << answer[1] << endl;

    return 0;
}