This is a new project, that's using a socket runtime. If you remember Norton Commander or Total Commander way way back, when we use MS-DOS on our PC's.

## Files-Commander - Local-First Implementation

MVP that implement the basic functionality of Files-Commander app:

1. Set up the React app and create the two-panel interface with a navigation bar at the top.
2. Fetch a list of drives and display them in the navigation bar. Allow the user to navigate to a selected drive.
   - I'll need to use a library like `react-router` to handle user navigation. Use the `fs` module to fetch a list of available drives, and display them in a dropdown or as icons in the navigation bar.
3. Fetch the file system for the current drive and display it in one of the panels. Each file and directory should have a corresponding icon.
   - Fetching the file system for the current drive and displaying it in one of the panels can be done using the `fs` module. I'll need to display each file and directory in the panel as an icon or list item and use CSS to style the icons or list items accordingly.
4. Implement functionality for creating new folders and files. When a user creates a new folder, it should show up in the current directory as a new directory icon. When creating a new file the user should be able to edit it directly in the app.
   - For creating new folders and files, I will add a button or icon in the panel that allows users to create these. When a user creates a new folder, it should show up in the current directory as a new directory icon. When creating a new file, I'll use a UI component such as a modal to allow users to edit the file's contents directly in the app
5. Implement functionality for deleting files and folders. When a user deletes a file or folder, it should be removed from the file system and from the interface.
   - Implementing functionality for deleting files and folders is simple. I'll can add a button or icon for users to delete a file or folder. When a user deletes a file or folder, it should be removed from the file system and the interface
6. Add functionality for reading and writing files. When a user clicks on a file icon, its contents should be displayed in the other panel.
   - Adding functionality for reading and writing files can be done using the `fs` module. When a user clicks on a file icon, its contents should be displayed in the other panel using a UI component such as a modal.
7. Implement features for renaming files and folders.
   - I'll add a button or icon for users to rename a file or folder.
8. Add functionality for copying and moving files and folders.
   - Adding functionality for copying and moving files and folders is a bit more complex, I'll need to use a method like `fs.copyFile` or `fs.move` to move or copy files and folders.
9. Implement search functionality that allows users to search for files by name.
   - To implement search functionality that allows users to search for files by name, I'll add a search bar at the top or bottom of the panel. When a user types in a search term, use the `fs` module to search for files and directories that match the term and display them in the panel.
10. Add sorting and filtering functionality to the file system, such as sorting by name, size, or date modified.
    -To add sorting and filtering functionality to the file system, such as sorting by name, size, or date modified, I'll add buttons or icons that allow users to sort the files according to their needs. When a user clicks on a sorting button, use the `fs` module to sort the files according to the user's choice

Advanced features that can be added to this app to improve its functionality and user experience:

1. Cloud integration: Allow users to connect to their cloud storage services like Google Drive, Dropbox, OneDrive, etc. to access their files and perform operations.

- This is optional and probably will never be implemented

2. Zip and Unzip features: Allow users to compress and decompress files and folders.
3. Multi-language support: Add multi-language support to cater to users from different regions to make the app more accessible.
4. Collaboration and Sharing features: Allow users to share their files and directories with others, with control over permissions and roles.
5. Dark Mode: Add a dark mode for people who prefer low-light environments, reducing the strain on their eyes.
6. Keybindings and shortcuts: Implement shortcut keys to allow users to perform various actions like copy, paste, create folder and more, with ease using keyboard shortcuts.
7. File preview: Add a preview feature to enable users to see a preview of a file before opening it fully, like PDFs, videos, pictures, HTML and more.
8. Terminal support: Allow users to perform actions using a terminal-based interface.
9. Recent files: Add a section that shows recent files that the user has worked on to allow the user to quickly access them.
10. Integration with external tools: Permits usage of external editing tools like Photoshop, Figma, Google Spreadsheets etc. by opening the application within the Command-Files app.
    - This is optional and probably will never be implemented
    - Excalidraw ?

For state management, I'll add the Redux/Toolkit library. As for types, I'm not sure yet. I may use JavaScript type coercion or Typescript.
