---
hide_table_of_contents: true
---

# Before GitHub

:::info Quick Facts

- Git was first released in 2005.
- GitHub was first released in 2008.
- Software development in large teams sucked before then.

:::

## Example Scenario

**Person A** writes this code, but it doesn't work:

```python
def welcome_greeting():
    print("Hello World!")
```

---

**Person A** sends the code to **Person B** so they can take a look at the code and fix it up.

**Person B** fixes the code on their computer by adding another line which invokes the function:

```python
def welcome_greeting():
    print("Hello World!")

welcome_greeting()
```

**Person B** sends this code back to **Person A**, who then replaces the original file with the updated one. We just did a bug fix! 🥳

Our collaboration process is flawless. Who needs GitHub?

---

However, what if **Person A** had made a change to the code in the meantime?

```python
def welcome_greeting():
    print("Hello User! Thank you for using This Software Application!")
```

Now they have a problem. **A** and **B** have both modified the code, and they both want to keep their changes. They need to do a **merge**.

In this above case, this is relatively easy, because they've both edited different lines of the file. So with some manual copying and pasting, they can get the code to look like this:

```python
def welcome_greeting(username):
    print("Hello User! Thank you for using This Software Application!")

welcome_greeting()
```

But what if they had both modified the same line? How would they decide whose change to keep in the final version? Would the other person's changes be lost forever?

What if they wanted to reverse this change?

What if, instead of a 3-line Hello World file, they were collaborating on a full-stack web application with hundreds of thousands of lines of code, several interconnected services, and millions of daily users? Copying files back and forth every day and manually pasting changes might not be the most scalable solution.
