using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> names = new List<string>();
        List<string> depts = new List<string>();
        List<string> ids = new List<string>();

        Console.WriteLine("Simple Attendance System");

        for (int i = 0; i < 3; i++)
        {
            Console.Write("Enter Name: ");
            names.Add(Console.ReadLine());

            Console.Write("Enter Department: ");
            depts.Add(Console.ReadLine());

            Console.Write("Enter Student ID: ");
            ids.Add(Console.ReadLine());

            Console.WriteLine("Attendance Recorded!\n");
        }

        Console.WriteLine("\n--- Attendance List ---");

        for (int i = 0; i < names.Count; i++)
        {
            Console.WriteLine(names[i] + " | " + depts[i] + " | " + ids[i]);
        }
    }
}