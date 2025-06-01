// bit_font.js
// (The font data and most of the logic remains exactly as before.)

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


// ─── DOM ELEMENTS ───────────────────────────────────────────────────────────────
// (Exactly the same as before—just querying buttons, selects, canvas, etc.)

const tabs = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const encodeInput = document.getElementById('encodeInput');
const encodeOutput = document.getElementById('encodeOutput');
const encodeButton = document.getElementById('encodeButton');
const encodeAndDisplayButton = document.getElementById('encodeAndDisplayButton');
const encodeFormat = document.getElementById('encodeFormat');

const decodeInput = document.getElementById('decodeInput');
const decodeButton = document.getElementById('decodeButton');
const decodeFormat = document.getElementById('decodeFormat');

const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');
const pixelColorPicker = document.getElementById('pixelColor');
const pixelSizeSlider = document.getElementById('pixelSize');
const toggleGridButton = document.getElementById('toggleGridButton');
const savePngButton = document.getElementById('savePngButton');
const rotateBtn = document.getElementById('rotateBtn');


// ─── STATE VARIABLES ────────────────────────────────────────────────────────────

let pixelSize = 4;
let showGrid = false;
let pixelColor = '#39ff14';
let displayData = [];  // Will hold an array of bytes (0–255)


// ─── INITIALIZATION ─────────────────────────────────────────────────────────────

function init() {
    // Tab switching (unchanged)
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Button & dropdown listeners (unchanged)
    encodeButton.addEventListener('click', encodeText);
    encodeAndDisplayButton.addEventListener('click', encodeAndDisplay);
    decodeButton.addEventListener('click', displayHexText);
    pixelColorPicker.addEventListener('change', updatePixelColor);
    pixelSizeSlider.addEventListener('input', updatePixelSize);
    toggleGridButton.addEventListener('click', toggleGrid);
    savePngButton.addEventListener('click', saveToPNG);


    // Initial canvas draw (it will be blank until we decode something)
    updateCanvas();
}

document.addEventListener('DOMContentLoaded', init);


// ─── ENCODE / DECODE LOGIC (unchanged) ───────────────────────────────────────────

function textToByteArray(text) {
    const byteArr = [];
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const code = char.charCodeAt(0) - 32;
        if (code >= 0 && code <= 96) {
            const start = code * 5;
            const end = start + 5;
            for (let j = start; j < end; j++) {
                byteArr.push(font5x7[j]);
            }
            // Add a single-column spacer
            byteArr.push(0);
        }
    }
    return byteArr;
}

function encodeText() {
    const text = encodeInput.value;
    if (!text) {
        encodeOutput.value = '';
        return;
    }

    const byteArray = textToByteArray(text);
    if (encodeFormat.value === 'hex') {
        const hexStr = byteArray
            .map(b => b.toString(16).padStart(2, '0'))
            .join(' ');
        encodeOutput.value = hexStr;
    } else {
        // Base64: pack bytes into a Uint8Array, then atob/btoa
        const uint8 = new Uint8Array(byteArray);
        const rawString = String.fromCharCode(...uint8);
        let b64 = btoa(rawString);
        // Insert line breaks every 76 chars
        b64 = b64.replace(/(.{76})/g, '$1\n');
        encodeOutput.value = b64;
    }
}

function encodeAndDisplay() {
    encodeText();
    decodeInput.value = encodeOutput.value;
    decodeFormat.value = encodeFormat.value;
    tabs[1].click();
    displayHexText();
}

function parseHexString(hexString) {
    return hexString
        .trim()
        .split(/\s+/)
        .map(h => parseInt(h, 16));
}

function displayHexText() {
    const rawInput = decodeInput.value.trim();
    if (!rawInput) return;

    if (decodeFormat.value === 'hex') {
        try {
            displayData = parseHexString(rawInput);
        } catch (e) {
            alert('Invalid hex input.');
            return;
        }
    } else {
        // Base64 case
        const flat = rawInput.replace(/\s+/g, '');
        let binaryStr;
        try {
            binaryStr = atob(flat);
        } catch (e) {
            alert('Invalid Base64 input.');
            return;
        }
        const byteArr = [];
        for (let i = 0; i < binaryStr.length; i++) {
            byteArr.push(binaryStr.charCodeAt(i));
        }
        displayData = byteArr;
    }

    updateCanvas();
}

function hexStringToBitMatrix(hexStr) {
    const raw = hexStr.replace(/\s+/g, '');
    const mat = [];
    for (let i = 0; i < raw.length; i += 2) {
        const byte = parseInt(raw.slice(i, i + 2), 16);
        const bits = byte.toString(2).padStart(8, '0').split('');
        mat.push(bits);
    }
    return mat;
}

function rotateMatrixCCW(mat) {
    const transposed = mat[0].map((_, c) => mat.map(row => row[c]));
    return transposed.reverse();
}

function matrixToHex(mat) {
    let bits = '';
    mat.forEach(row => row.forEach(b => (bits += b)));
    const pad = (8 - (bits.length % 8)) % 8;
    if (pad) bits = bits.padEnd(bits.length + pad, '0');
    const out = [];
    for (let i = 0; i < bits.length; i += 8) {
        out.push(
            parseInt(bits.slice(i, i + 8), 2)
                .toString(16)
                .padStart(2, '0')
        );
    }
    return out.join(' ');
}


function updateCanvas() {
    if (!displayData || displayData.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }

    // Each byte = 1 column; always 8 rows tall
    const cols = displayData.length;
    const rows = 8;

    canvas.width = cols * pixelSize;
    canvas.height = rows * pixelSize;

    // Fill background
    ctx.fillStyle = '#1e1e1e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Optional grid overlay
    if (showGrid) {
        drawGrid();
    }

    // Draw each byte :
    for (let i = 0; i < displayData.length; i++) {
        const byte = displayData[i];
        for (let b = 0; b < 8; b++) {
            const testBit = 7 - b; // that was the MSB→LSB ordering
            if (byte & (1 << testBit)) {
                // Flip vertical: row = 7 - b
                ctx.fillStyle = pixelColor;
                ctx.fillRect(
                    i * pixelSize,
                    (7 - b) * pixelSize,
                    pixelSize,
                    pixelSize
                );
            }
        }
    }
}

function drawGrid() {
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
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

// ─── GRID & COLOR CONTROLS (unchanged) ─────────────────────────────────────────

function toggleGrid() {
    showGrid = !showGrid;
    updateCanvas();
}

function updatePixelColor(e) {
    pixelColor = e.target.value;
    updateCanvas();
}

function updatePixelSize(e) {
    pixelSize = parseInt(e.target.value, 10);
    updateCanvas();
}

function saveToPNG() {
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'bitmap-font.png';
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
