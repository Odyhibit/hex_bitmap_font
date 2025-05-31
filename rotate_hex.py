def hex_to_binary_list(hex_list):
    binary_list = []
    for hex_string in hex_list:
        num = []
        decimal_value = int(hex_string, 16)  # Convert hex to decimal
        binary_string = bin(decimal_value)[2:].zfill(8)  # Convert decimal to binary, remove "0b" prefix
        for i in binary_string:
            num.append(i)
        binary_list.append(num)
    return binary_list

def print_hex_list(hex_list):
    for hex_string in hex_list:
        decimal_value = int(hex_string, 16)  # Convert hex to decimal
        binary_string = bin(decimal_value)[2:].zfill(8)  # Convert decimal to binary, remove "0b" prefix
        for i in binary_string:
            if i == '1':
                print("#",end="")
            if i == "0":
                print(" ",end="")
        print()

def rotate_matrix(matrix):
    return [[row[i] for row in matrix] for i in range(len(matrix[0])-1,0,-1)]

def binary_to_hex_list(binary_list):
    hex_list = []
    for bin_str in binary_list:
        bin_str += ['0'] * (8 - len(bin_str))  # pad to multiple of 8
        for i in range(0, len(bin_str), 8):
            eight_bits = "".join(bin_str[i:i+8])
            num = int(eight_bits, 2)
            hex_list.append(str(hex(num)[2:].zfill(2)))

    hex_list += ['0'] * (8 - len(hex_list))  # pad to multiple of 8
    return hex_list

hello_hex = "7f 08 08 08 7f 00 38 54 54 54 18 00 00 41 7f 40 00 00 00 41 7f 40 00 00 38 44 44 44 38 00"
hello_list =  hello_hex.split()
bin_list = hex_to_binary_list(hello_list)
rotated_list = rotate_matrix(bin_list)

print_hex_list(hello_list)
for i in range(len(rotated_list)):
    for j in range(len(rotated_list[i])):
        if rotated_list[i][j] == "0":
            print(" ",end="")
        if rotated_list[i][j] == "1":
            print("#",end="")
    print()
print(bin_list)
print(rotated_list)
test_matrix = [[1,2,3],[4,5,6],[7,8,9]]
print(test_matrix)
print(rotate_matrix(test_matrix))
test_value = binary_to_hex_list(rotated_list)
print(test_value)
for i in test_value:
    print(i, end=" ")
print("")

print(hello_list)
twice_setup = " ".join(test_value)
twice_setup = twice_setup.split()
print("twice setup")
print(twice_setup)
twice_bin = hex_to_binary_list(twice_setup)

rotated_twice = rotate_matrix(twice_bin)
twice_hex = binary_to_hex_list(rotated_twice)
print(" ".join(twice_hex))
