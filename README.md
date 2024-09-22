# Live Demo
<a href='https://real-time-text.vercel.app/'>https://real-time-text.vercel.app/</a>
<hr>
# Real-Time Text Editor

This is a **React-based real-time text editor** that allows users to type text, view statistics (unique word count, character count excluding spaces and punctuation), search and replace text, and store text in local storage.

## Features
- **Word and Character Count**: Displays unique word count and character count (excluding spaces and punctuation) in real-time.
- **Search and Replace**: Allows users to search for a string and replace it with another. Displays a message if the search string is not found.
- **Local Storage Persistence**: The text is saved in local storage and restored when the page is reloaded.
- **Clear Text**: A button to clear the text and reset the editor.
- **Responsive Design**: Optimized for both mobile and desktop screens.
  
## Prerequisites

Make sure you have the following installed on your local development environment:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone this repository:
```bash
 git clone https://github.com/your-username/repository-name.git
```
2. Go to directory
```bash
cd repository-name
```
4. Install node modules
```bash
npm install
```
6. Run Command
```bash
npm run dev
```
> [!NOTE]
> Go to localhost 5173 to view project :
> http://localhost:5173/

   

<hr>

This project is a **React-based real-time text editor** that provides users with various functionalities to manage and manipulate text. Here's a detailed explanation of each feature and how they work:

### Key Features:

1. **Text Input Area**:
   - **Textarea** is provided for users to input and manipulate text. As the user types, the app processes the text in real time.
   - Text is saved to **localStorage** and persists between page reloads. This means the user won't lose their input after refreshing the page.
   - Placeholders guide the user on where to type.

2. **Word and Character Count**:
   - The app calculates two key statistics:
     1. **Unique Words**: Counts the number of unique words in the input text. It uses regular expressions to identify and extract words, then stores them in a `Set` (which inherently removes duplicates), and finally returns the size of that set.
     2. **Character Count (excluding punctuation and spaces)**: This counts all alphanumeric characters in the text by stripping out any non-letter and non-number characters.
   - These statistics are updated in real-time as the user types or edits their text.
   - The unique word count and character count are displayed in separate styled boxes.

3. **Search and Replace Functionality**:
   - **Search String**: The user can input a string they want to search for within the main text.
   - **Replace String**: Once the search string is entered, the user can specify a replacement string to substitute all occurrences of the search string in the text.
   - **Replace All Button**: This button triggers the search and replace functionality. All occurrences of the search string are replaced with the replacement string.
   - **Feedback on Search**:
     - If the search string is found, it's replaced.
     - If the search string is **not found**, a red "String is Not Found" message is displayed to alert the user.
     - After the search, both input fields are cleared.

4. **Clear Text Functionality**:
   - **Clear Text Button**: This button clears the entire text area and also removes the saved text from **localStorage**. It effectively resets the editor.
   - The clear action also clears any messages or input in the search/replace fields.

5. **Dynamic Button States**:
   - Both the **Replace All** and **Clear Text** buttons are dynamically disabled when there is no text in the textarea.
   - When the text box is empty, the buttons are styled in a "disabled" state with gray colors and a cursor indicating they are non-interactive. When text is entered, the buttons become active, changing color to blue with hover effects for interactivity.

6. **Visual Feedback**:
   - When the search string isn't found in the text, a message `"String is Not Found"` is displayed in red beneath the buttons to alert the user.
   - The input fields for search and replace are also disabled if the main text is empty. This prevents the user from trying to perform operations on an empty text area.

7. **Responsive Design**:
   - The project is styled with **Tailwind CSS** for responsive and clean UI components. 
   - `max-sm` and `md` classes are used for ensuring the layout adjusts smoothly on different screen sizes.
   - The `container`, `p-4`, `mx-auto`, and other Tailwind utility classes help in centering and padding the components correctly.
   - On smaller screens, the font sizes and padding are reduced to provide a good user experience without overwhelming the screen.

### Key Methods:

1. **`useEffect` for LocalStorage**:
   - When the app loads, the text from localStorage is retrieved (if available) and set as the initial value in the textarea. This ensures that the text persists even after the page is refreshed.
   - Another `useEffect` ensures that any change in the text updates localStorage in real-time.

2. **Text Replacement Logic**:
   - The `handleReplace` function uses a **regular expression** to search the text. It does a global and case-insensitive search using the `gi` flags.
   - If the search string is found, it replaces all occurrences with the replace string. If not, it shows the "String is Not Found" message.

### User Experience:

- The app is designed for **real-time interaction**, providing immediate feedback on word and character counts.
- It supports **flexibility** with the ability to search and replace text efficiently.
- It offers **data persistence** through localStorage, making it user-friendly as data is not lost when the page is refreshed.
- The **responsive design** ensures usability across both desktop and mobile devices, adjusting the layout and sizes dynamically.

