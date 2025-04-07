// Font data - 5x7 bitmap font (same as Python script)
        const font5x7 = [
            0x00, 0x00, 0x00, 0x00, 0x00,  // (space)
            0x00, 0x00, 0x5F, 0x00, 0x00,  // !
            0x00, 0x07, 0x00, 0x07, 0x00,  // "
            0x14, 0x7F, 0x14, 0x7F, 0x14,  // #
            0x24, 0x2A, 0x7F, 0x2A, 0x12,  // $
            0x23, 0x13, 0x08, 0x64, 0x62,  // %
            0x36, 0x49, 0x55, 0x22, 0x50,  // &
            0x00, 0x05, 0x03, 0x00, 0x00,  // '
            0x00, 0x1C, 0x22, 0x41, 0x00,  // (
            0x00, 0x41, 0x22, 0x1C, 0x00,  // )
            0x08, 0x2A, 0x1C, 0x2A, 0x08,  // *
            0x08, 0x08, 0x3E, 0x08, 0x08,  // +
            0x00, 0x50, 0x30, 0x00, 0x00,  // ,
            0x08, 0x08, 0x08, 0x08, 0x08,  // -
            0x00, 0x60, 0x60, 0x00, 0x00,  // .
            0x20, 0x10, 0x08, 0x04, 0x02,  // /
            0x3E, 0x51, 0x49, 0x45, 0x3E,  // 0
            0x00, 0x42, 0x7F, 0x40, 0x00,  // 1
            0x42, 0x61, 0x51, 0x49, 0x46,  // 2
            0x21, 0x41, 0x45, 0x4B, 0x31,  // 3
            0x18, 0x14, 0x12, 0x7F, 0x10,  // 4
            0x27, 0x45, 0x45, 0x45, 0x39,  // 5
            0x3C, 0x4A, 0x49, 0x49, 0x30,  // 6
            0x01, 0x71, 0x09, 0x05, 0x03,  // 7
            0x36, 0x49, 0x49, 0x49, 0x36,  // 8
            0x06, 0x49, 0x49, 0x29, 0x1E,  // 9
            0x00, 0x36, 0x36, 0x00, 0x00,  // :
            0x00, 0x56, 0x36, 0x00, 0x00,  // ;
            0x00, 0x08, 0x14, 0x22, 0x41,  // <
            0x14, 0x14, 0x14, 0x14, 0x14,  // =
            0x41, 0x22, 0x14, 0x08, 0x00,  // >
            0x02, 0x01, 0x51, 0x09, 0x06,  // ?
            0x32, 0x49, 0x79, 0x41, 0x3E,  // @
            0x7E, 0x11, 0x11, 0x11, 0x7E,  // A
            0x7F, 0x49, 0x49, 0x49, 0x36,  // B
            0x3E, 0x41, 0x41, 0x41, 0x22,  // C
            0x7F, 0x41, 0x41, 0x22, 0x1C,  // D
            0x7F, 0x49, 0x49, 0x49, 0x41,  // E
            0x7F, 0x09, 0x09, 0x01, 0x01,  // F
            0x3E, 0x41, 0x41, 0x51, 0x32,  // G
            0x7F, 0x08, 0x08, 0x08, 0x7F,  // H
            0x00, 0x41, 0x7F, 0x41, 0x00,  // I
            0x20, 0x40, 0x41, 0x3F, 0x01,  // J
            0x7F, 0x08, 0x14, 0x22, 0x41,  // K
            0x7F, 0x40, 0x40, 0x40, 0x40,  // L
            0x7F, 0x02, 0x04, 0x02, 0x7F,  // M
            0x7F, 0x04, 0x08, 0x10, 0x7F,  // N
            0x3E, 0x41, 0x41, 0x41, 0x3E,  // O
            0x7F, 0x09, 0x09, 0x09, 0x06,  // P
            0x3E, 0x41, 0x51, 0x21, 0x5E,  // Q
            0x7F, 0x09, 0x19, 0x29, 0x46,  // R
            0x46, 0x49, 0x49, 0x49, 0x31,  // S
            0x01, 0x01, 0x7F, 0x01, 0x01,  // T
            0x3F, 0x40, 0x40, 0x40, 0x3F,  // U
            0x1F, 0x20, 0x40, 0x20, 0x1F,  // V
            0x7F, 0x20, 0x18, 0x20, 0x7F,  // W
            0x63, 0x14, 0x08, 0x14, 0x63,  // X
            0x03, 0x04, 0x78, 0x04, 0x03,  // Y
            0x61, 0x51, 0x49, 0x45, 0x43,  // Z
            0x00, 0x00, 0x7F, 0x41, 0x41,  // [
            0x02, 0x04, 0x08, 0x10, 0x20,  // \
            0x41, 0x41, 0x7F, 0x00, 0x00,  // ]
            0x04, 0x02, 0x01, 0x02, 0x04,  // ^
            0x40, 0x40, 0x40, 0x40, 0x40,  // _
            0x00, 0x01, 0x02, 0x04, 0x00,  // `
            0x20, 0x54, 0x54, 0x54, 0x78,  // a
            0x7F, 0x48, 0x44, 0x44, 0x38,  // b
            0x38, 0x44, 0x44, 0x44, 0x20,  // c
            0x38, 0x44, 0x44, 0x48, 0x7F,  // d
            0x38, 0x54, 0x54, 0x54, 0x18,  // e
            0x08, 0x7E, 0x09, 0x01, 0x02,  // f
            0x08, 0x14, 0x54, 0x54, 0x3C,  // g
            0x7F, 0x08, 0x04, 0x04, 0x78,  // h
            0x00, 0x44, 0x7D, 0x40, 0x00,  // i
            0x20, 0x40, 0x44, 0x3D, 0x00,  // j
            0x00, 0x7F, 0x10, 0x28, 0x44,  // k
            0x00, 0x41, 0x7F, 0x40, 0x00,  // l
            0x7C, 0x04, 0x18, 0x04, 0x78,  // m
            0x7C, 0x08, 0x04, 0x04, 0x78,  // n
            0x38, 0x44, 0x44, 0x44, 0x38,  // o
            0x7C, 0x14, 0x14, 0x14, 0x08,  // p
            0x08, 0x14, 0x14, 0x18, 0x7C,  // q
            0x7C, 0x08, 0x04, 0x04, 0x08,  // r
            0x48, 0x54, 0x54, 0x54, 0x20,  // s
            0x04, 0x3F, 0x44, 0x40, 0x20,  // t
            0x3C, 0x40, 0x40, 0x20, 0x7C,  // u
            0x1C, 0x20, 0x40, 0x20, 0x1C,  // v
            0x3C, 0x40, 0x30, 0x40, 0x3C,  // w
            0x44, 0x28, 0x10, 0x28, 0x44,  // x
            0x0C, 0x50, 0x50, 0x50, 0x3C,  // y
            0x44, 0x64, 0x54, 0x4C, 0x44,  // z
            0x00, 0x08, 0x36, 0x41, 0x00,  // {
            0x00, 0x00, 0x7F, 0x00, 0x00,  // |
            0x00, 0x41, 0x36, 0x08, 0x00,  // }
            0x08, 0x08, 0x2A, 0x1C, 0x08,  // ->
            0x08, 0x1C, 0x2A, 0x08, 0x08   // <-
        ];

        // DOM Elements
        const tabs = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        const encodeInput = document.getElementById('encodeInput');
        const encodeOutput = document.getElementById('encodeOutput');
        const encodeButton = document.getElementById('encodeButton');
        const encodeAndDisplayButton = document.getElementById('encodeAndDisplayButton');
        const decodeInput = document.getElementById('decodeInput');
        const decodeButton = document.getElementById('decodeButton');
        const canvas = document.getElementById('pixelCanvas');
        const ctx = canvas.getContext('2d');
        const pixelColorPicker = document.getElementById('pixelColor');
        const pixelSizeSlider = document.getElementById('pixelSize');
        const toggleGridButton = document.getElementById('toggleGridButton');
        const savePngButton = document.getElementById('savePngButton');

        // Canvas settings
        let pixelSize = 4;
        let showGrid = false;
        let pixelColor = '#39ff14';
        let displayData = [];

        // Initialize
        function init() {
            // Set up tabs
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabId = tab.getAttribute('data-tab');

                    tabs.forEach(t => t.classList.remove('active'));
                    tabContents.forEach(tc => tc.classList.remove('active'));

                    tab.classList.add('active');
                    document.getElementById(tabId).classList.add('active');
                });
            });

            // Set up buttons
            encodeButton.addEventListener('click', encodeText);
            encodeAndDisplayButton.addEventListener('click', encodeAndDisplay);
            decodeButton.addEventListener('click', displayHexText);
            pixelColorPicker.addEventListener('change', updatePixelColor);
            pixelSizeSlider.addEventListener('input', updatePixelSize);
            toggleGridButton.addEventListener('click', toggleGrid);
            savePngButton.addEventListener('click', saveToPNG);

            // Initial canvas setup
            updateCanvas();
        }

        // Text to hex conversion
        function textToHex(text) {
            let hexOfText = [];
            let output = '';

            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                // Font starts with space char (ASCII 32)
                const letterOffset = char.charCodeAt(0) - 32;

                if (letterOffset >= 0 && letterOffset <= 96) { // Include the arrow characters
                    const start = letterOffset * 5;
                    const end = start + 5;

                    // Add character bytes
                    for (let j = start; j < end; j++) {
                        hexOfText.push(font5x7[j]);
                    }

                    // Add space between characters
                    hexOfText.push(0);
                }
            }

            // Convert to hex string format
            for (let i = 0; i < hexOfText.length; i++) {
                output += hexOfText[i].toString(16).padStart(2, '0') + ' ';
            }

            return output.trim();
        }

        // Encode text action
        function encodeText() {
            const text = encodeInput.value;
            if (text) {
                encodeOutput.value = textToHex(text);
            } else {
                encodeOutput.value = '';
            }
        }

        // Encode and display action
        function encodeAndDisplay() {
            encodeText();
            decodeInput.value = encodeOutput.value;

            // Switch to decode tab
            tabs[1].click();

            // Display the text
            displayHexText();
        }

        // Parse hex string
        function parseHexString(hexString) {
            return hexString.trim().split(/\s+/).map(hex => parseInt(hex, 16));
        }

        // Display hex as bitmap font
        function displayHexText() {
            const hexInput = decodeInput.value.trim();
            if (hexInput) {
                displayData = parseHexString(hexInput);
                updateCanvas();
            }
        }

        // Update canvas size and redraw
        function updateCanvas() {
            if (displayData.length === 0) return;

            // Calculate canvas dimensions
            const charWidth = 5;
            const charHeight = 8; // Using 8 to account for space between rows
            const charsPerRow = Math.max(20, Math.ceil(Math.sqrt(displayData.length / 6))); // Approximate characters per row

            const totalCols = Math.min(
                displayData.length,
                charsPerRow * 6 // 5 columns + 1 space
            );

            const rows = Math.ceil(displayData.length / charsPerRow / 6);

            // Set canvas size with space for pixel grid
            canvas.width = totalCols * pixelSize;
            canvas.height = rows * charHeight * pixelSize;

            // Clear canvas
            ctx.fillStyle = '#1e1e1e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw grid if enabled
            if (showGrid) {
                drawGrid();
            }

            // Draw font data
            drawFontData();
        }

        // Draw grid lines
        function drawGrid() {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 0.5;

            // Vertical lines
            for (let x = 0; x <= canvas.width; x += pixelSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = 0; y <= canvas.height; y += pixelSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        }

        // Draw font data on the canvas
        function drawFontData() {
            ctx.fillStyle = pixelColor;

            const charsPerRow = Math.max(20, Math.ceil(Math.sqrt(displayData.length / 6)));
            let x = 0;
            let y = 0;
            let charCount = 0;

            for (let i = 0; i < displayData.length; i++) {
                const byte = displayData[i];

                // Draw each bit as a pixel
                for (let bit = 0; bit < 8; bit++) {
                    if ((byte >> bit) & 1) {
                        // Y is flipped because bitmap fonts are usually top-to-bottom
                        // While bit 0 is the bottom pixel, bit 7 is the top
                        ctx.fillRect(
                            x * pixelSize,
                            (y + bit) * pixelSize,
                            pixelSize,
                            pixelSize
                        );

                        // Add glow effect
                        ctx.save();
                        ctx.shadowColor = pixelColor;
                        ctx.shadowBlur = 4;
                        ctx.fillRect(
                            x * pixelSize,
                            (y + bit) * pixelSize,
                            pixelSize,
                            pixelSize
                        );
                        ctx.restore();
                    }
                }

                // Move to next column
                x++;

                // Check if we need to move to next char or next row
                if ((i + 1) % 6 === 0) {
                    charCount++;

                    // If we've reached the end of a row, move to next row
                    if (charCount % charsPerRow === 0) {
                        x = 0;
                        y += 8; // Move down 8 pixels for next row
                    }
                }
            }
        }

        // Update pixel color
        function updatePixelColor() {
            pixelColor = pixelColorPicker.value;
            updateCanvas();
        }

        // Update pixel size
        function updatePixelSize() {
            pixelSize = parseInt(pixelSizeSlider.value);
            updateCanvas();
        }

        // Toggle grid display
        function toggleGrid() {
            showGrid = !showGrid;
            updateCanvas();
        }

        // Save canvas as PNG
        function saveToPNG() {
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'bitmap-font.png';
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Initialize the application
        document.addEventListener('DOMContentLoaded', init);