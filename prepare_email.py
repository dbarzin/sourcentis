#!/usr/bin/python3
def rot47(text):
    result = ''
    for char in text:
        ascii_val = ord(char)
        if 33 <= ascii_val <= 126:
            result += chr(33 + ((ascii_val + 14) % 94))
        else:
            result += char
    return result

if __name__ == "__main__":
    email = input("Adresse à encoder (ex: mailto:reston@gmail.com) : ")
    print("ROT47 encodé : {{< email encoded=\"", rot47(email), "\" >}}")
