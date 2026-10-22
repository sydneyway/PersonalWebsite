# SydneyWay_Website
Project 1 for CSCE 331: TAMU people page website for Sydney Way.



External Links List:
- LinkedIn- https://www.linkedin.com/in/sydney-way-311310306/ -top of all pages
- Email- mailto: sydneyway@tamu.edu -index.html
- Resume Preview- https://drive.google.com/file/d/1DA6KMa-ck59n20VrV8cYPBCtWvKF34vC/preview -qualifications.html
- Resume Download- https://drive.google.com/file/d/1DA6KMa-ck59n20VrV8cYPBCtWvKF34vC/view?usp=sharing -qualifications.html
- Data Science Article- https://pmc.ncbi.nlm.nih.gov/articles/PMC9308575/ -qualifications.html
- HCI Article- https://www.hcii.cmu.edu/research-areas/healthcare -qualifications.html
- Revenue & Demand Prediction Github- https://github.com/AlekAlvarez/Datathon2024 -portfolio.html
- Cookbook App Github- https://github.com/sydneyway/CookbookApp -portfolio.html
- Fantasy Football App Github- https://github.com/jsir-g/StarterFantasy -portfolio.html
- Rugby Team- https://www.tamuwrfc.com/ -activities.html
- Big Event- https://bigevent.tamu.edu/ -activities.html



Peer Review Feedback:
I needed to change my color scheme, and add a header bar with links to each of my pages. In addition, I could add a link to my LinkedIn page in the header. They also said that all my icons need to be the same style. The general structure of my pages was good, and they liked my sandbox page. They also liked the pictures I added of myself and my activities. I incorporated all of their suggestions to make my website look cleaner, professional, and unified, while keeping the aspects of it that they liked.



AI Prompt History (ChatGPT):
- Prompt: create an html file with in-line css that is a functional miniature version of MSPaint, where users can select different paint tools and colors, and use the mouse to draw on a canvas

Response:
Done — I created a self-contained HTML file with inline CSS and JavaScript.

It includes:

✎ Pencil
🖌 Brush
▱ Eraser
╱ Line tool
□ Rectangle tool
○ Circle tool
🎨 Color picker + preset swatches
Adjustable brush size
Undo / redo
Clear canvas
Save drawing as PNG
Mouse/pointer drawing on the canvas
Shift-constrained lines and shapes

Download the Mini Paint HTML file


- Prompt:
add a header on the page that is labelled "Sydney Way". move the tool bar to the left side of the page, and move the colors to the bottom.

Response:
Done. I updated the Mini Paint page with:

“Sydney Way” header at the top
Tool bar moved to the left
Colors moved to the bottom
Drawing functionality, tools, undo/redo, clear, and save preserved
Responsive layout for smaller screens

Download the updated Mini Paint HTML file

- Prompt:
make the header text centered, with a maroon background. move the actions bar above the tool bar. add tools for a paintbucket and an eraser

Response:
Done. I updated the Mini Paint file with:

Centered “Sydney Way” header
Maroon header background
Actions bar moved above the toolbar
Paint Bucket tool with functional flood-fill
Eraser tool (already present, now retained alongside the new bucket)
All existing drawing tools and features preserved

Download the updated Mini Paint HTML

- Prompt:
make the tool bar be a single column, and change the tool icons to a colorful emoji style

Response:
Done! The toolbar is now a single vertical column, and the tool icons use a colorful emoji style:

✏️ Pencil
🖌️ Brush
🪣 Paint Bucket
🧽 Eraser
📏 Line
⬜ Rectangle
⭕ Circle

Download the updated Mini Paint HTML 

- Prompt:
add labels to the tools next to their icons, and change the line icon to just be a line and not a ruler

Response:
Done. I added labels next to each tool icon and changed the Line tool from the ruler emoji to a simple diagonal line.

Download the updated Mini Paint HTML

- Prompt:
make the save button a download button so that the image drawn can be downloaded

Response:
Done. The Save button is now a ⬇️ Download button that downloads the current drawing as a PNG image named sydney-way-mini-paint.png.

Download the updated Mini Paint HTML

- Prompt:
add a "home" button shaped like a house in the top left corner of the screen (as part of the header) that switches the page to one titled "index.html"

Response:
Done. I added a house-shaped Home button (⌂) in the top-left corner of the maroon header. Clicking it now navigates to index.html.

Download the updated Mini Paint HTML

- Prompt:
make the home button larger and solid white. also change the header color to #7112B0

Response:
Done. I updated the page with:

🏠 A larger solid-white Home button
Header color changed to #7112B0
Home button still navigates to index.html

Download the updated Mini Paint HTML

- Prompt:
get rid of the minimize, maximize, and exit button icons in the top right

Response:
Done. I removed the minimize, maximize, and exit icons from the top-right of the page.

Download the updated Mini Paint HTML

- Prompt:
Center the "Mini Paint" title and make the text a bit larger

Response:
Done. I centered the Mini Paint title and increased its size slightly.

- Prompt:
make the home button filled in solid white, and round the corners of the page and all boxes

Response:
Done. I updated the page with:

A filled solid-white house icon for the Home button
Rounded corners on the main page/window
Rounded corners on the toolbar buttons, action buttons, color picker, canvas, and color swatches
The existing purple header and centered titles are preserved

Download the updated Mini Paint HTML

- Prompt:
allow for the user to zoom in on the canvas with a scrollwheel, but otherwise make sure the canvas fits the window without needing a scroll bar

Response:
Done. The canvas now:

Fits inside the window without scrollbars at 100% zoom.
Zooms in and out with the mouse scroll wheel.
Supports zoom from 50% to 300%.
Shows the current zoom percentage in the status bar.
Keeps the drawing tools working correctly while zoomed.

Download the updated Mini Paint HTML

- Prompt:
resize so that the canvas is exactly square

Response:
Done. The drawing canvas is now exactly square (700 × 700) while still fitting within the window and supporting scroll-wheel zoom.

Download the updated Mini Paint HTML

- Prompt:
make sure that this all automatically resizes to other computer resolutions while still fitting correctly and not needing to scroll

Response:
Done. I made the layout responsive so it automatically adapts to different screen sizes and resolutions:

Uses the available viewport height and width dynamically
Keeps the square canvas intact
Prevents the overall page from requiring scrollbars
Scales the toolbar appropriately
Works on smaller screens as well as larger monitors
Preserves scroll-wheel zoom functionality

Download the updated responsive Mini Paint HTML

- Prompt:
the drawing gets less accurate to mouse position as it gets further from the center, make sure it follows the mouse and draws correctly over the whole canvas

Response:
Fixed. The mouse-to-canvas coordinate calculation now accounts for the canvas's exact rendered size and zoom level, so drawing should stay directly under the cursor across the entire canvas rather than drifting toward the edges.

Download the corrected Mini Paint HTML

- Prompt:
make sure all tools are accessible, add a scrollbar if necessary. make the canvas bigger while keeping the mouse accuracy  

Response:
Changes:

1200 × 1200 square canvas for a larger, higher-resolution drawing area.
Canvas area now has scrollbars when needed, including when zoomed.
Toolbar is independently scrollable, so every tool remains accessible on smaller screens.
Mouse coordinates use the canvas’s actual rendered bounds, keeping drawing aligned with the cursor across the whole canvas and at different zoom levels.
Fixed a duplicate Home-button element that was present in the uploaded file.

Download the updated Mini Paint HTML
