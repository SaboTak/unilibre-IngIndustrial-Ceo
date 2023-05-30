import * as React from "react"
const JornadaSVG = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={812}
        height={130}
        fill="none"
        {...props}
    >
        <path fill="#000" d="M246.64 5.86h-2.66v122.13h2.66V5.86Z" />
        <path
            fill="#000"
            d="M245.18 2.49c2.43 0 4.39 1.82 4.39 4.07s-1.97 4.07-4.39 4.07-4.39-1.82-4.39-4.07 1.97-4.07 4.39-4.07ZM245.18 120.98c2.43 0 4.39 1.82 4.39 4.07s-1.97 4.07-4.39 4.07-4.39-1.82-4.39-4.07 1.97-4.07 4.39-4.07ZM0 9.75h11.88l5.3 37.93h.15l5.3-37.93h11.89v52.99h-7.87V22.62h-.15l-6.06 40.12h-6.97L7.42 22.62h-.15v40.12H0V9.75ZM47.17 9.75h11.28l8.63 52.99h-8.33l-1.52-10.52v.15h-9.46l-1.51 10.37h-7.72l8.63-52.99Zm9.08 35.43-3.71-26.19h-.15l-3.63 26.19h7.5-.01ZM75.26 40.19 65.2 9.75h8.85l5.68 19.46h.15l5.68-19.46h8.1L83.59 40.19v22.55h-8.33V40.19ZM95.49 50.18V22.32C95.49 13.84 99.95 9 108.13 9s12.64 4.85 12.64 13.32v27.86c0 8.48-4.47 13.32-12.64 13.32-8.17 0-12.64-4.84-12.64-13.32Zm16.96.53V21.79c0-3.79-1.67-5.23-4.31-5.23-2.64 0-4.32 1.44-4.32 5.23v28.92c0 3.78 1.67 5.22 4.32 5.22 2.65 0 4.31-1.44 4.31-5.22ZM126.38 9.75h12.34c8.63 0 12.34 4.01 12.34 12.19v3.25c0 5.45-1.74 8.93-5.45 10.45v.15c4.16 1.29 5.53 5.22 5.53 11.21v9.31c0 2.57.08 4.47.91 6.43h-8.48c-.46-1.36-.76-2.19-.76-6.51v-9.69c0-4.92-1.44-6.51-5.22-6.51h-2.88v22.71h-8.33V9.75Zm11.36 22.71c3.1 0 5-1.36 5-5.6v-4.09c0-3.79-1.29-5.45-4.24-5.45h-3.79v15.14h3.03ZM156.89 9.75h22.71v7.57h-14.38v14.01h11.43v7.57h-11.43v16.27h14.38v7.57h-22.71V9.75ZM183.09 50.18v-3.03h7.87v3.63c0 3.79 1.67 5.15 4.31 5.15 2.64 0 4.32-1.36 4.32-5.3 0-4.39-1.67-7.19-7.12-11.96-6.96-6.13-9.23-10.45-9.23-16.5 0-8.32 4.31-13.17 12.42-13.17s12.11 4.85 12.11 13.32v2.2h-7.87v-2.73c0-3.79-1.52-5.23-4.16-5.23s-4.17 1.44-4.17 5.07c0 3.86 1.74 6.66 7.19 11.43 6.96 6.13 9.16 10.37 9.16 16.96 0 8.63-4.39 13.47-12.57 13.47s-12.26-4.84-12.26-13.32M8.33 72.84H0v52.99h8.33V72.84ZM14.54 72.84h10.45l8.1 31.72h.15V72.84h7.42v52.99H32.1l-9.99-38.68h-.15v38.68h-7.42V72.84ZM46.87 72.84H68.9v7.57H55.2v14.76h10.75v7.57H55.2v23.09h-8.33V72.84ZM72.32 113.26V85.4c0-8.47 4.46-13.32 12.64-13.32S97.6 76.93 97.6 85.4v27.86c0 8.48-4.47 13.32-12.64 13.32-8.17 0-12.64-4.84-12.64-13.32Zm16.96.53V84.87c0-3.78-1.67-5.22-4.31-5.22-2.64 0-4.32 1.44-4.32 5.22v28.92c0 3.78 1.67 5.22 4.32 5.22 2.65 0 4.31-1.44 4.31-5.22ZM103.21 72.84h12.34c8.63 0 12.34 4.01 12.34 12.19v3.25c0 5.45-1.74 8.93-5.45 10.45v.15c4.16 1.29 5.53 5.22 5.53 11.21v9.31c0 2.57.08 4.47.91 6.43h-8.48c-.46-1.36-.76-2.19-.76-6.51v-9.69c0-4.92-1.44-6.51-5.22-6.51h-2.88v22.71h-8.33V72.84Zm11.36 22.71c3.1 0 4.99-1.36 4.99-5.6v-4.09c0-3.79-1.29-5.45-4.24-5.45h-3.79v15.14H114.57ZM133.72 72.84h11.89l5.3 37.92h.15l5.3-37.92h11.88v52.99h-7.87V85.71h-.15l-6.06 40.12h-6.96l-6.06-40.12h-.15v40.12h-7.27V72.84ZM174.46 72.84h22.71v7.57h-14.38v14h11.43v7.57h-11.43v16.28h14.38v7.57h-22.71V72.84ZM200.66 113.26v-3.03h7.87v3.63c0 3.79 1.67 5.15 4.31 5.15 2.64 0 4.32-1.36 4.32-5.3 0-4.39-1.67-7.19-7.12-11.96-6.96-6.13-9.23-10.45-9.23-16.5 0-8.33 4.31-13.17 12.42-13.17s12.11 4.85 12.11 13.32v2.2h-7.87v-2.72c0-3.79-1.52-5.23-4.16-5.23s-4.17 1.44-4.17 5.07c0 3.86 1.74 6.66 7.19 11.43 6.96 6.13 9.16 10.37 9.16 16.96 0 8.63-4.39 13.47-12.57 13.47s-12.26-4.84-12.26-13.32ZM319.02 27.29c0 15.07-12.22 27.29-27.29 27.29-15.07 0-27.29-12.22-27.29-27.29C264.44 12.22 276.66 0 291.73 0c15.07 0 27.29 12.22 27.29 27.29ZM319.02 99.06c0 15.07-12.22 27.29-27.29 27.29-15.07 0-27.29-12.22-27.29-27.29 0-15.07 12.22-27.29 27.29-27.29 15.07 0 27.29 12.22 27.29 27.29Z"
        />
        <path
            fill="#fff"
            d="M303.52 36.82H277.8c-.35 0-.64-.28-.64-.64V18.82c0-.35.28-.64.64-.64h25.72c.35 0 .64.29.64.64v17.36c0 .35-.28.64-.64.64Zm-25.08-1.27h24.45V19.46h-24.45v16.09Z"
        />
        <path
            fill="#fff"
            d="M290.66 29.96c-.85 0-1.69-.3-2.37-.9l-10.92-9.76a.623.623 0 0 1-.17-.7c.09-.25.33-.41.59-.41h25.72c.26 0 .5.16.59.41.09.25.03.53-.17.7l-10.92 9.76c-.68.6-1.52.9-2.37.9m-11.19-10.5 9.67 8.64c.87.78 2.18.78 3.04 0l9.67-8.64h-22.39.01Z"
        />
        <path
            fill="#fff"
            d="M303.52 36.7H277.8c-.26 0-.5-.16-.59-.41a.636.636 0 0 1 .17-.7l9.58-8.56c.26-.23.67-.21.9.05.23.26.21.66-.05.9l-8.34 7.45h22.39l-8.34-7.45a.644.644 0 0 1-.05-.9c.23-.26.64-.29.9-.05l9.58 8.56c.2.18.26.46.17.7-.09.25-.33.41-.59.41M280.88 98.09V84.53c0-1.75 1.09-3.06 2.81-3.38.18-.03.36-.03.54-.03h13.7c1.9 0 3.36 1.43 3.36 3.34v27.26c0 1.92-1.47 3.35-3.39 3.35h-13.63c-1.96 0-3.39-1.44-3.39-3.41V98.1m1.08-12.72h16.14c.16 0 .32 0 .47.04.27.06.4.25.41.52 0 .27-.13.46-.39.53-.15.04-.31.04-.47.04h-16.11c0 .14-.02.26-.02.37v24.69c0 .27.03.55.1.81.28 1.01 1.1 1.59 2.27 1.59h13.49c1.41-.01 2.3-.89 2.31-2.3v-2.38h-15.79c-.15 0-.3 0-.44-.02-.31-.04-.48-.24-.48-.56.01-.36.24-.54.71-.54H300.15V84.49c0-1.34-.91-2.27-2.24-2.28h-13.7c-1.06 0-1.94.67-2.16 1.65-.1.47-.08.97-.12 1.5"
        />
        <path
            fill="#fff"
            d="M289.41 111.63c0-.93.73-1.68 1.65-1.69.95 0 1.7.73 1.71 1.66 0 .92-.74 1.68-1.65 1.68-.95 0-1.7-.72-1.7-1.66m1.67.56c.29 0 .57-.25.58-.55.02-.31-.26-.6-.57-.6-.3 0-.57.25-.58.55-.02.31.25.6.57.6ZM291.09 83.24h2.83c.44 0 .67.2.68.55 0 .35-.22.57-.66.57h-5.73c-.44 0-.65-.21-.64-.58.01-.35.23-.53.65-.53h2.87"
        />
        <path
            fill="#000"
            d="M344.85 19.88v4.19h-15.4V4.89h15.04v4.19h-9.67v3.23h8.52v4.05h-8.52v3.51h10.03v.01ZM346.71 14.27h8v4h-8v-4ZM381.41 10.62c1.09 1.1 1.63 2.75 1.63 4.96v8.49h-5.2v-7.64c0-1.04-.2-1.81-.59-2.3-.39-.49-.94-.74-1.66-.74-.79 0-1.42.27-1.89.82-.48.55-.71 1.38-.71 2.49v7.37h-5.21v-7.64c0-2.03-.75-3.04-2.25-3.04-.8 0-1.44.27-1.92.82-.47.55-.71 1.38-.71 2.49v7.37h-5.21V9.22h4.96v1.56c.55-.6 1.2-1.05 1.96-1.36.76-.3 1.58-.45 2.48-.45 1.04 0 1.97.19 2.79.58.82.38 1.49.97 2 1.75.58-.75 1.32-1.32 2.22-1.73.9-.4 1.87-.6 2.93-.6 1.83 0 3.28.55 4.37 1.64l.01.01ZM398.29 10.67c1.3 1.12 1.95 2.85 1.95 5.16v8.25h-4.85v-1.92c-.75 1.44-2.21 2.16-4.38 2.16-1.15 0-2.15-.2-2.99-.6-.84-.4-1.47-.94-1.9-1.63-.43-.68-.64-1.47-.64-2.34 0-1.41.54-2.5 1.62-3.27 1.08-.78 2.74-1.17 4.99-1.17h2.96c-.09-1.57-1.14-2.36-3.15-2.36-.71 0-1.43.11-2.16.34-.73.23-1.35.54-1.86.95l-1.75-3.53c.82-.55 1.82-.97 3-1.27 1.18-.3 2.36-.45 3.55-.45 2.47 0 4.35.56 5.64 1.68h-.03Zm-4.25 9.93c.46-.29.79-.72.99-1.29v-1.29h-2.25c-1.52 0-2.27.5-2.27 1.51 0 .46.17.82.52 1.1.35.27.82.41 1.42.41s1.13-.15 1.59-.44ZM403.83 6.79c-.58-.53-.88-1.19-.88-1.97s.29-1.44.88-1.97c.58-.53 1.35-.79 2.3-.79.95 0 1.72.25 2.3.75.58.5.88 1.15.88 1.93s-.29 1.5-.88 2.04c-.58.54-1.35.81-2.3.81-.95 0-1.72-.26-2.3-.79v-.01Zm-.3 2.44h5.21v14.85h-5.21V9.23ZM412.1 3.75h5.21v20.33h-5.21V3.75ZM329.95 30.25c-.42-.39-.63-.88-.63-1.46s.21-1.07.63-1.47c.42-.39.94-.59 1.56-.59.62 0 1.14.19 1.56.56.42.37.63.84.63 1.41 0 .6-.21 1.11-.62 1.52-.41.41-.94.62-1.58.62-.64 0-1.14-.2-1.56-.59h.01Zm-.17 3h3.42v14.63h-3.42V33.25ZM350.44 34.7c1.11 1.08 1.67 2.68 1.67 4.79v8.38h-3.42v-7.94c0-1.28-.3-2.24-.9-2.89-.6-.65-1.46-.97-2.57-.97-1.26 0-2.26.38-2.99 1.14-.73.76-1.1 1.85-1.1 3.27v7.4h-3.42V33.25h3.26v1.89c.57-.68 1.28-1.19 2.14-1.53.86-.35 1.83-.52 2.9-.52 1.84 0 3.32.54 4.44 1.62l-.01-.01ZM371.01 33.25v12.41c0 5.15-2.63 7.72-7.89 7.72-1.41 0-2.74-.18-4-.53-1.26-.36-2.3-.87-3.12-1.55l1.53-2.58c.64.53 1.45.95 2.42 1.27.98.32 1.97.48 2.97.48 1.61 0 2.78-.37 3.53-1.1.75-.73 1.12-1.84 1.12-3.34v-.77c-.58.64-1.3 1.12-2.14 1.45-.84.33-1.76.49-2.77.49-1.39 0-2.64-.3-3.77-.89a6.694 6.694 0 0 1-2.66-2.51c-.65-1.08-.97-2.31-.97-3.7 0-1.39.32-2.62.97-3.68a6.625 6.625 0 0 1 2.66-2.48c1.12-.58 2.38-.88 3.77-.88 1.06 0 2.02.17 2.89.52.87.35 1.59.88 2.18 1.59v-1.95h3.26l.02.03Zm-4.62 9.9c.83-.78 1.25-1.79 1.25-3.03 0-1.24-.42-2.22-1.25-2.99-.83-.77-1.89-1.15-3.19-1.15s-2.39.38-3.22 1.15c-.83.77-1.25 1.76-1.25 2.99 0 1.23.42 2.25 1.25 3.03.83.78 1.9 1.16 3.22 1.16 1.32 0 2.36-.39 3.19-1.16ZM373.26 47.88h13.7v2.08h-13.7v-2.08ZM389.36 30.25c-.42-.39-.63-.88-.63-1.46s.21-1.07.63-1.47c.42-.39.94-.59 1.56-.59.62 0 1.14.19 1.56.56.42.37.63.84.63 1.41 0 .6-.21 1.11-.62 1.52-.41.41-.94.62-1.58.62-.64 0-1.14-.2-1.56-.59h.01Zm-.17 3h3.42v14.63h-3.42V33.25ZM409.86 34.7c1.11 1.08 1.67 2.68 1.67 4.79v8.38h-3.42v-7.94c0-1.28-.3-2.24-.9-2.89-.6-.65-1.46-.97-2.57-.97-1.26 0-2.26.38-2.99 1.14-.73.76-1.1 1.85-1.1 3.27v7.4h-3.42V33.25h3.26v1.89c.57-.68 1.28-1.19 2.14-1.53.86-.35 1.83-.52 2.9-.52 1.84 0 3.32.54 4.44 1.62l-.01-.01ZM430.21 27.55v20.33h-3.29v-1.89c-.57.69-1.26 1.21-2.1 1.56-.84.35-1.75.52-2.75.52-1.41 0-2.67-.31-3.79-.93-1.12-.62-2-1.5-2.64-2.64-.64-1.14-.96-2.45-.96-3.93s.32-2.79.96-3.92a6.743 6.743 0 0 1 2.64-2.63c1.12-.62 2.39-.93 3.79-.93.97 0 1.85.16 2.66.49.8.33 1.49.82 2.05 1.48v-7.51H430.21Zm-5.51 17.03c.66-.37 1.18-.91 1.56-1.6.38-.69.58-1.5.58-2.41 0-.91-.19-1.72-.58-2.41-.38-.69-.9-1.23-1.56-1.6-.66-.37-1.4-.56-2.22-.56-.82 0-1.56.19-2.22.56-.66.38-1.18.91-1.56 1.6-.38.69-.58 1.5-.58 2.41 0 .91.19 1.72.58 2.41.38.69.9 1.23 1.56 1.6.66.37 1.4.56 2.22.56.82 0 1.56-.19 2.22-.56ZM448.86 33.25v14.63h-3.26v-1.86c-.55.66-1.23 1.17-2.05 1.52-.82.36-1.71.53-2.66.53-1.95 0-3.49-.54-4.62-1.63-1.12-1.09-1.68-2.7-1.68-4.83v-8.36h3.42v7.89c0 1.32.3 2.3.89 2.95.59.65 1.44.97 2.53.97 1.22 0 2.2-.38 2.92-1.14.72-.76 1.08-1.85 1.08-3.27v-7.4H448.86ZM454.4 47.61c-1.13-.31-2.04-.7-2.71-1.18l1.32-2.6c.66.44 1.45.79 2.37 1.05.92.27 1.83.4 2.73.4 2.05 0 3.07-.54 3.07-1.62 0-.51-.26-.87-.78-1.07-.52-.2-1.36-.39-2.51-.58-1.21-.18-2.19-.39-2.95-.63-.76-.24-1.42-.65-1.97-1.25-.56-.59-.84-1.42-.84-2.48 0-1.39.58-2.5 1.74-3.33 1.16-.83 2.73-1.25 4.7-1.25 1 0 2.01.11 3.01.34 1 .23 1.83.53 2.47.92l-1.32 2.6c-1.24-.73-2.64-1.1-4.19-1.1-1 0-1.77.15-2.29.45-.52.3-.78.7-.78 1.19 0 .55.28.94.84 1.16.56.23 1.42.44 2.59.64 1.17.18 2.13.39 2.88.63s1.39.64 1.93 1.21.81 1.37.81 2.41c0 1.37-.59 2.46-1.78 3.29-1.19.83-2.8 1.23-4.85 1.23-1.19 0-2.35-.16-3.48-.47l-.01.04ZM476.26 47.09c-.4.33-.89.58-1.47.74-.58.16-1.18.25-1.82.25-1.61 0-2.85-.42-3.73-1.26-.88-.84-1.32-2.06-1.32-3.67v-7.04h-2.41v-2.74h2.41v-3.34h3.42v3.34h3.92v2.74h-3.92v6.96c0 .71.17 1.26.52 1.63.35.37.85.56 1.51.56.77 0 1.41-.2 1.92-.6l.96 2.44.01-.01ZM487.55 33.09v3.26a4.8 4.8 0 0 0-.79-.08c-1.33 0-2.37.39-3.12 1.16-.75.77-1.12 1.9-1.12 3.36v7.1h-3.42V33.26h3.26v2.14c.99-1.53 2.72-2.3 5.21-2.3l-.02-.01ZM490.64 30.25c-.42-.39-.63-.88-.63-1.46s.21-1.07.63-1.47c.42-.39.94-.59 1.56-.59.62 0 1.14.19 1.56.56.42.37.63.84.63 1.41 0 .6-.21 1.11-.62 1.52-.41.41-.94.62-1.58.62-.64 0-1.14-.2-1.56-.59h.01Zm-.17 3h3.42v14.63h-3.42V33.25ZM508.93 34.64c1.14 1.03 1.71 2.59 1.71 4.67v8.57h-3.23V46.1c-.42.64-1.02 1.13-1.79 1.46-.78.34-1.71.51-2.81.51s-2.05-.19-2.88-.56c-.82-.37-1.46-.89-1.9-1.56-.45-.67-.67-1.42-.67-2.26 0-1.31.49-2.37 1.47-3.16s2.52-1.19 4.62-1.19h3.78v-.22c0-1.02-.31-1.81-.92-2.36-.61-.55-1.52-.82-2.73-.82-.82 0-1.63.13-2.42.38-.79.26-1.47.61-2.01 1.07l-1.34-2.49c.77-.58 1.69-1.03 2.77-1.34 1.08-.31 2.22-.47 3.42-.47 2.15 0 3.8.52 4.94 1.55h-.01Zm-3.12 10.35c.67-.39 1.14-.95 1.41-1.68v-1.7h-3.53c-1.97 0-2.96.65-2.96 1.95 0 .62.25 1.11.74 1.48.49.37 1.18.55 2.05.55.87 0 1.62-.2 2.29-.59v-.01ZM515.02 27.55h3.42v20.33h-3.42V27.55ZM534.87 34.02c1.12.62 2 1.5 2.64 2.63.64 1.13.96 2.44.96 3.92s-.32 2.79-.96 3.93a6.703 6.703 0 0 1-2.64 2.64c-1.12.62-2.4.93-3.82.93-1 0-1.92-.17-2.75-.52a5.41 5.41 0 0 1-2.1-1.56v1.89h-3.26V27.55h3.42v7.48c.58-.64 1.27-1.12 2.07-1.45.79-.33 1.67-.49 2.62-.49 1.42 0 2.7.31 3.82.93Zm-1.1 9.86c.81-.84 1.22-1.94 1.22-3.31s-.41-2.47-1.22-3.31c-.81-.84-1.85-1.26-3.11-1.26-.82 0-1.56.19-2.22.56-.66.38-1.18.91-1.56 1.6-.38.69-.58 1.5-.58 2.41 0 .91.19 1.72.58 2.41.39.69.9 1.23 1.56 1.6.66.37 1.4.56 2.22.56 1.26 0 2.3-.42 3.11-1.26ZM552.1 34.64c1.14 1.03 1.71 2.59 1.71 4.67v8.57h-3.23V46.1c-.42.64-1.02 1.13-1.79 1.46-.78.34-1.71.51-2.81.51s-2.05-.19-2.88-.56c-.82-.37-1.46-.89-1.9-1.56-.45-.67-.67-1.42-.67-2.26 0-1.31.49-2.37 1.47-3.16s2.52-1.19 4.62-1.19h3.78v-.22c0-1.02-.31-1.81-.92-2.36-.61-.55-1.52-.82-2.73-.82-.82 0-1.63.13-2.42.38-.79.26-1.47.61-2.01 1.07l-1.34-2.49c.77-.58 1.69-1.03 2.77-1.34 1.08-.31 2.22-.47 3.42-.47 2.15 0 3.8.52 4.94 1.55h-.01Zm-3.12 10.35c.67-.39 1.14-.95 1.41-1.68v-1.7h-3.53c-1.97 0-2.96.65-2.96 1.95 0 .62.25 1.11.74 1.48.49.37 1.18.55 2.05.55.87 0 1.62-.2 2.29-.59v-.01ZM572.5 33.25v19.94h-3.42V46.1c-1.15 1.31-2.71 1.97-4.68 1.97-1.42 0-2.7-.31-3.82-.93-1.12-.62-2-1.5-2.63-2.63-.63-1.13-.95-2.45-.95-3.95s.32-2.79.96-3.92a6.784 6.784 0 0 1 2.63-2.63c1.11-.62 2.38-.93 3.81-.93 1 0 1.92.17 2.75.52.83.35 1.53.87 2.1 1.56v-1.92h3.26l-.01.01Zm-4.6 10.63c.82-.84 1.23-1.94 1.23-3.31s-.41-2.47-1.23-3.31c-.82-.84-1.86-1.26-3.12-1.26s-2.3.42-3.11 1.26c-.81.84-1.22 1.94-1.22 3.31s.41 2.47 1.22 3.31c.81.84 1.85 1.26 3.11 1.26 1.26 0 2.3-.42 3.12-1.26ZM595.7 29.99c1.95 1.02 3.47 2.45 4.56 4.27 1.09 1.83 1.63 3.89 1.63 6.19 0 2.3-.47 4.23-1.4 5.57-.93 1.34-2.22 2.01-3.86 2.01-.88 0-1.62-.21-2.22-.62-.6-.41-1.02-1-1.26-1.77-1.1 1.59-2.74 2.38-4.93 2.38-1.24 0-2.37-.3-3.37-.89-1-.59-1.79-1.42-2.36-2.48-.57-1.06-.85-2.26-.85-3.62 0-1.36.28-2.52.85-3.58.57-1.05 1.35-1.87 2.36-2.46 1-.59 2.13-.89 3.37-.89.97 0 1.84.16 2.62.49.78.33 1.43.81 1.96 1.45v-1.78h3.04v9.31c0 .66.13 1.13.4 1.42.27.29.61.44 1.03.44.75 0 1.32-.42 1.71-1.27.39-.85.59-2.08.59-3.68 0-1.94-.44-3.64-1.33-5.12-.89-1.48-2.12-2.63-3.71-3.45-1.59-.82-3.42-1.23-5.48-1.23-2.06 0-3.93.43-5.53 1.3-1.61.87-2.85 2.08-3.73 3.63-.88 1.55-1.32 3.31-1.32 5.29s.43 3.79 1.3 5.34c.87 1.55 2.1 2.76 3.68 3.63 1.59.87 3.41 1.3 5.48 1.3.89 0 1.8-.1 2.73-.3.92-.2 1.79-.5 2.59-.9l.74 2.19c-.8.42-1.75.74-2.84.96-1.09.22-2.16.33-3.22.33-2.56 0-4.82-.54-6.78-1.62s-3.49-2.57-4.58-4.47c-1.09-1.9-1.63-4.05-1.63-6.46s.55-4.51 1.64-6.4c1.1-1.89 2.63-3.37 4.62-4.45 1.98-1.08 4.26-1.62 6.83-1.62 2.57 0 4.7.51 6.66 1.53l.01.03Zm-3.99 14.23c.76-.78 1.14-1.83 1.14-3.16s-.38-2.36-1.14-3.12c-.76-.77-1.73-1.15-2.92-1.15s-2.18.39-2.93 1.16c-.75.77-1.12 1.81-1.12 3.11 0 1.3.37 2.37 1.12 3.15.75.78 1.73 1.18 2.93 1.18 1.2 0 2.16-.39 2.92-1.16v-.01ZM619.48 33.25v14.63h-3.26v-1.86c-.55.66-1.23 1.17-2.05 1.52-.82.36-1.71.53-2.66.53-1.95 0-3.49-.54-4.62-1.63-1.12-1.09-1.68-2.7-1.68-4.83v-8.36h3.42v7.89c0 1.32.3 2.3.89 2.95.59.65 1.44.97 2.53.97 1.22 0 2.2-.38 2.92-1.14.72-.76 1.08-1.85 1.08-3.27v-7.4H619.48ZM636.71 34.7c1.11 1.08 1.67 2.68 1.67 4.79v8.38h-3.42v-7.94c0-1.28-.3-2.24-.9-2.89-.6-.65-1.46-.97-2.57-.97-1.26 0-2.26.38-2.99 1.14-.73.76-1.1 1.85-1.1 3.27v7.4h-3.42V33.25h3.26v1.89c.57-.68 1.28-1.19 2.14-1.53.86-.35 1.83-.52 2.9-.52 1.84 0 3.32.54 4.44 1.62l-.01-.01ZM642.9 30.25c-.42-.39-.63-.88-.63-1.46s.21-1.07.63-1.47c.42-.39.94-.59 1.56-.59.62 0 1.14.19 1.56.56.42.37.63.84.63 1.41 0 .6-.21 1.11-.62 1.52-.41.41-.94.62-1.58.62-.64 0-1.14-.2-1.56-.59h.01Zm-.17 3h3.42v14.63h-3.42V33.25ZM650.65 27.55h3.42v20.33h-3.42V27.55ZM658.73 30.25c-.42-.39-.63-.88-.63-1.46s.21-1.07.63-1.47c.42-.39.94-.59 1.56-.59.62 0 1.14.19 1.56.56.42.37.63.84.63 1.41 0 .6-.21 1.11-.62 1.52-.41.41-.94.62-1.58.62-.64 0-1.14-.2-1.56-.59h.01Zm-.17 3h3.42v14.63h-3.42V33.25ZM678.42 34.02c1.12.62 2 1.5 2.64 2.63.64 1.13.96 2.44.96 3.92s-.32 2.79-.96 3.93a6.703 6.703 0 0 1-2.64 2.64c-1.12.62-2.4.93-3.82.93-1 0-1.92-.17-2.75-.52a5.41 5.41 0 0 1-2.1-1.56v1.89h-3.26V27.55h3.42v7.48c.58-.64 1.27-1.12 2.07-1.45.79-.33 1.67-.49 2.62-.49 1.42 0 2.7.31 3.82.93Zm-1.1 9.86c.81-.84 1.22-1.94 1.22-3.31s-.41-2.47-1.22-3.31c-.81-.84-1.85-1.26-3.11-1.26-.82 0-1.56.19-2.22.56-.66.38-1.18.91-1.56 1.6-.38.69-.58 1.5-.58 2.41 0 .91.19 1.72.58 2.41.39.69.9 1.23 1.56 1.6.66.37 1.4.56 2.22.56 1.26 0 2.3-.42 3.11-1.26ZM693.74 33.09v3.26a4.8 4.8 0 0 0-.79-.08c-1.33 0-2.37.39-3.12 1.16-.75.77-1.12 1.9-1.12 3.36v7.1h-3.42V33.26h3.26v2.14c.99-1.53 2.72-2.3 5.21-2.3l-.02-.01ZM710.23 41.66h-11.48c.2 1.08.73 1.93 1.58 2.56.85.63 1.9.95 3.16.95 1.61 0 2.93-.53 3.97-1.59l1.84 2.11c-.66.79-1.49 1.38-2.49 1.78-1 .4-2.14.6-3.4.6-1.61 0-3.02-.32-4.25-.96-1.22-.64-2.17-1.53-2.83-2.67-.67-1.14-1-2.43-1-3.88 0-1.45.32-2.71.97-3.85a6.93 6.93 0 0 1 2.7-2.67c1.15-.64 2.45-.96 3.89-.96s2.7.31 3.82.95c1.12.63 2 1.52 2.63 2.66.63 1.14.94 2.46.94 3.96 0 .24-.02.58-.05 1.01Zm-10.12-4.86c-.76.65-1.22 1.51-1.38 2.59h8.3c-.15-1.06-.59-1.92-1.34-2.58-.75-.66-1.68-.99-2.79-.99s-2.02.32-2.78.97l-.01.01ZM713.08 47.43c-.44-.43-.66-.97-.66-1.63 0-.66.21-1.22.64-1.64.43-.42.96-.63 1.6-.63.64 0 1.17.21 1.6.63.43.42.64.97.64 1.64 0 .67-.22 1.2-.66 1.63-.44.43-.97.64-1.59.64-.62 0-1.15-.21-1.59-.64h.02ZM733.71 41.66h-11.48c.2 1.08.73 1.93 1.58 2.56.85.63 1.9.95 3.16.95 1.61 0 2.93-.53 3.97-1.59l1.84 2.11c-.66.79-1.49 1.38-2.49 1.78-1 .4-2.14.6-3.4.6-1.61 0-3.02-.32-4.25-.96-1.22-.64-2.17-1.53-2.83-2.67-.67-1.14-1-2.43-1-3.88 0-1.45.32-2.71.97-3.85a6.93 6.93 0 0 1 2.7-2.67c1.15-.64 2.45-.96 3.89-.96s2.7.31 3.82.95c1.12.63 2 1.52 2.63 2.66.63 1.14.94 2.46.94 3.96 0 .24-.02.58-.05 1.01Zm-10.12-4.86c-.76.65-1.22 1.51-1.38 2.59h8.3c-.15-1.06-.59-1.92-1.34-2.58-.75-.66-1.68-.99-2.79-.99s-2.02.32-2.78.97l-.01.01ZM751.38 27.55v20.33h-3.29v-1.89c-.57.69-1.26 1.21-2.1 1.56-.84.35-1.75.52-2.75.52-1.41 0-2.67-.31-3.79-.93-1.12-.62-2-1.5-2.64-2.64-.64-1.14-.96-2.45-.96-3.93s.32-2.79.96-3.92a6.743 6.743 0 0 1 2.64-2.63c1.12-.62 2.39-.93 3.79-.93.97 0 1.85.16 2.66.49.8.33 1.49.82 2.05 1.48v-7.51H751.38Zm-5.51 17.03c.66-.37 1.18-.91 1.56-1.6.38-.69.58-1.5.58-2.41 0-.91-.19-1.72-.58-2.41-.38-.69-.9-1.23-1.56-1.6-.66-.37-1.4-.56-2.22-.56-.82 0-1.56.19-2.22.56-.66.38-1.18.91-1.56 1.6-.38.69-.58 1.5-.58 2.41 0 .91.19 1.72.58 2.41.38.69.9 1.23 1.56 1.6.66.37 1.4.56 2.22.56.82 0 1.56-.19 2.22-.56ZM770.04 33.25v14.63h-3.26v-1.86c-.55.66-1.23 1.17-2.05 1.52-.82.36-1.71.53-2.66.53-1.95 0-3.49-.54-4.62-1.63-1.12-1.09-1.68-2.7-1.68-4.83v-8.36h3.42v7.89c0 1.32.3 2.3.89 2.95.59.65 1.44.97 2.53.97 1.22 0 2.2-.38 2.92-1.14.72-.76 1.08-1.85 1.08-3.27v-7.4H770.04ZM774.04 47.43c-.44-.43-.66-.97-.66-1.63 0-.66.21-1.22.64-1.64.43-.42.96-.63 1.6-.63.64 0 1.17.21 1.6.63.43.42.64.97.64 1.64 0 .67-.22 1.2-.66 1.63-.44.43-.97.64-1.59.64-.62 0-1.15-.21-1.59-.64h.02ZM783.6 47.11c-1.21-.64-2.15-1.53-2.82-2.67-.68-1.14-1.01-2.43-1.01-3.88 0-1.45.34-2.73 1.01-3.86a7.13 7.13 0 0 1 2.81-2.66c1.2-.64 2.56-.96 4.1-.96 1.44 0 2.71.29 3.79.88 1.09.58 1.9 1.42 2.45 2.52l-2.63 1.53c-.42-.67-.95-1.18-1.58-1.52-.63-.34-1.32-.51-2.07-.51-1.28 0-2.34.42-3.18 1.25-.84.83-1.26 1.94-1.26 3.33 0 1.39.42 2.5 1.25 3.33.83.83 1.89 1.25 3.19 1.25.75 0 1.44-.17 2.07-.51.63-.34 1.16-.84 1.58-1.52l2.63 1.53a5.88 5.88 0 0 1-2.48 2.53c-1.09.59-2.34.89-3.77.89-1.52 0-2.88-.32-4.08-.96v.01ZM799.27 47.11a7.005 7.005 0 0 1-2.78-2.67c-.67-1.14-1-2.43-1-3.88 0-1.45.33-2.73 1-3.86a7.05 7.05 0 0 1 2.78-2.66c1.19-.64 2.52-.96 4-.96s2.84.32 4.03.96c1.19.64 2.11 1.52 2.78 2.66.67 1.13 1 2.42 1 3.86s-.33 2.74-1 3.88a7.005 7.005 0 0 1-2.78 2.67c-1.19.64-2.53.96-4.03.96-1.5 0-2.81-.32-4-.96Zm7.12-3.23c.82-.84 1.23-1.94 1.23-3.31s-.41-2.47-1.23-3.31c-.82-.84-1.86-1.26-3.12-1.26s-2.3.42-3.11 1.26c-.81.84-1.22 1.94-1.22 3.31s.41 2.47 1.22 3.31c.81.84 1.85 1.26 3.11 1.26 1.26 0 2.3-.42 3.12-1.26ZM333.6 96.88a9.549 9.549 0 0 1-3.77-3.55c-.91-1.52-1.37-3.23-1.37-5.15 0-1.92.46-3.63 1.37-5.15.91-1.52 2.17-2.7 3.77-3.55 1.6-.85 3.4-1.27 5.41-1.27 1.75 0 3.33.31 4.74.93 1.41.62 2.58 1.52 3.51 2.68l-3.45 3.12c-1.24-1.5-2.75-2.25-4.52-2.25-1.04 0-1.97.23-2.78.69a4.81 4.81 0 0 0-1.89 1.93c-.45.83-.67 1.79-.67 2.86 0 1.07.22 2.03.67 2.86.45.83 1.08 1.48 1.89 1.93.81.46 1.74.68 2.78.68 1.77 0 3.28-.75 4.52-2.25l3.45 3.12c-.93 1.17-2.1 2.06-3.51 2.68-1.41.62-2.99.93-4.74.93-2.01 0-3.81-.42-5.41-1.27v.03ZM364.08 91.66h-10.79c.22.77.64 1.36 1.27 1.77.63.41 1.42.62 2.37.62.71 0 1.33-.1 1.85-.3.52-.2 1.04-.53 1.58-.99l2.74 2.85c-1.44 1.61-3.55 2.41-6.33 2.41-1.74 0-3.26-.33-4.58-.99-1.31-.66-2.33-1.57-3.05-2.74-.72-1.17-1.08-2.49-1.08-3.97s.35-2.77 1.05-3.93c.7-1.16 1.68-2.07 2.92-2.73 1.24-.66 2.64-.99 4.19-.99 1.55 0 2.82.31 4.03.92a6.92 6.92 0 0 1 2.86 2.66c.7 1.16 1.05 2.53 1.05 4.12 0 .04-.03.47-.08 1.29Zm-9.85-4.6c-.54.46-.88 1.08-1.03 1.86h6.08c-.15-.79-.49-1.41-1.03-1.86-.54-.46-1.21-.69-2.01-.69-.8 0-1.47.23-2.01.69ZM366.57 77.44h5.21v20.33h-5.21V77.44ZM390.76 82.92v14.85h-4.96v-1.59c-.55.6-1.21 1.06-1.97 1.37-.77.31-1.58.46-2.44.46-1.92 0-3.45-.57-4.59-1.7-1.14-1.13-1.71-2.83-1.71-5.09v-8.3h5.21v7.45c0 1.11.21 1.93.63 2.44.42.51 1.03.77 1.84.77s1.49-.29 2.01-.86c.52-.57.78-1.46.78-2.64v-7.15h5.21l-.01-.01ZM394.1 77.44h5.21v20.33h-5.21V77.44ZM414.65 84.36c1.3 1.12 1.95 2.85 1.95 5.16v8.25h-4.85v-1.92c-.75 1.44-2.21 2.16-4.38 2.16-1.15 0-2.15-.2-2.99-.6-.84-.4-1.47-.94-1.9-1.63-.43-.68-.64-1.47-.64-2.34 0-1.41.54-2.5 1.62-3.27 1.08-.78 2.74-1.17 4.99-1.17h2.96c-.09-1.57-1.14-2.36-3.15-2.36-.71 0-1.43.11-2.16.34-.73.23-1.35.54-1.86.95l-1.75-3.53c.82-.55 1.82-.97 3-1.27 1.18-.3 2.36-.45 3.55-.45 2.47 0 4.35.56 5.64 1.68h-.03Zm-4.25 9.93c.46-.29.79-.72.99-1.29v-1.29h-2.25c-1.52 0-2.27.5-2.27 1.51 0 .46.17.82.52 1.1.35.27.82.41 1.42.41s1.13-.15 1.59-.44ZM426.91 83.18c.85-.34 1.82-.51 2.92-.51v4.68c-.47-.05-.87-.08-1.18-.08-1.11 0-1.99.3-2.62.9-.63.6-.95 1.52-.95 2.77v6.82h-5.21V82.91h4.96v1.78c.53-.68 1.22-1.18 2.07-1.52l.01.01ZM330.7 121.11c-.58-2.19-.86-4.54-.86-7.04s.29-4.85.86-7.05c.58-2.2 1.4-4.12 2.48-5.77h3.26c-1.11 1.97-1.93 4-2.45 6.1-.52 2.09-.78 4.33-.78 6.73 0 2.4.26 4.63.78 6.73.52 2.09 1.34 4.12 2.45 6.09h-3.26c-1.08-1.66-1.9-3.59-2.48-5.78v-.01ZM350.46 112.12c.93.99 1.4 2.22 1.4 3.7 0 1.11-.28 2.13-.85 3.04-.57.91-1.42 1.64-2.56 2.18-1.14.54-2.53.81-4.18.81-1.37 0-2.69-.2-3.96-.59-1.27-.39-2.35-.94-3.25-1.63l1.53-2.77c.69.58 1.54 1.05 2.53 1.38 1 .34 2.02.51 3.08.51 1.26 0 2.25-.26 2.97-.78.72-.52 1.08-1.23 1.08-2.12 0-.89-.34-1.59-1.03-2.1-.68-.5-1.73-.75-3.14-.75h-1.75v-2.44l4.36-5.18h-8.71v-2.99h13.07v2.38l-4.66 5.53c1.77.22 3.12.82 4.05 1.81l.02.01ZM358.08 120.68c-1.21-.78-2.16-1.91-2.85-3.4s-1.04-3.26-1.04-5.3.35-3.81 1.04-5.3c.69-1.49 1.64-2.62 2.85-3.4 1.21-.78 2.58-1.16 4.11-1.16 1.53 0 2.91.39 4.12 1.16 1.21.78 2.17 1.91 2.86 3.4s1.04 3.25 1.04 5.3-.35 3.81-1.04 5.3c-.69 1.49-1.65 2.62-2.86 3.4-1.21.78-2.59 1.17-4.12 1.17-1.53 0-2.9-.39-4.11-1.17Zm7.36-3.63c.79-1.13 1.19-2.82 1.19-5.07 0-2.25-.4-3.94-1.19-5.07-.79-1.13-1.88-1.7-3.25-1.7s-2.42.57-3.22 1.7c-.79 1.13-1.19 2.82-1.19 5.07 0 2.25.4 3.94 1.19 5.07.79 1.13 1.87 1.7 3.22 1.7s2.45-.57 3.25-1.7ZM376.52 120.68c-1.21-.78-2.16-1.91-2.85-3.4s-1.04-3.26-1.04-5.3.35-3.81 1.04-5.3c.69-1.49 1.64-2.62 2.85-3.4 1.21-.78 2.58-1.16 4.11-1.16 1.53 0 2.91.39 4.12 1.16 1.21.78 2.17 1.91 2.86 3.4s1.04 3.25 1.04 5.3-.35 3.81-1.04 5.3c-.69 1.49-1.65 2.62-2.86 3.4-1.21.78-2.59 1.17-4.12 1.17-1.53 0-2.9-.39-4.11-1.17Zm7.36-3.63c.79-1.13 1.19-2.82 1.19-5.07 0-2.25-.4-3.94-1.19-5.07-.79-1.13-1.88-1.7-3.25-1.7s-2.42.57-3.22 1.7c-.79 1.13-1.19 2.82-1.19 5.07 0 2.25.4 3.94 1.19 5.07.79 1.13 1.87 1.7 3.22 1.7s2.45-.57 3.25-1.7ZM390.46 126.89c1.11-1.97 1.94-4.01 2.47-6.11.53-2.1.79-4.34.79-6.71s-.26-4.61-.79-6.71c-.53-2.1-1.35-4.14-2.47-6.11h3.26c1.08 1.63 1.9 3.54 2.48 5.74.58 2.2.86 4.56.86 7.08 0 2.52-.29 4.87-.86 7.05-.58 2.18-1.4 4.1-2.48 5.77h-3.26ZM422.62 102.4v2.38l-7.45 16.79h-3.81l7.21-16.16h-7.53v3.26h-3.32v-6.27h14.9ZM436.4 110.46c1 .48 1.79 1.17 2.36 2.07.57.89.85 1.93.85 3.1 0 1.24-.31 2.33-.93 3.27a6.15 6.15 0 0 1-2.52 2.18c-1.06.51-2.25.77-3.56.77-2.63 0-4.67-.82-6.12-2.47-1.45-1.64-2.18-4-2.18-7.07 0-2.15.39-3.99 1.18-5.52.78-1.52 1.88-2.68 3.3-3.48 1.42-.79 3.05-1.19 4.92-1.19.99 0 1.91.11 2.78.32.87.21 1.62.52 2.26.92l-1.32 2.68c-.95-.62-2.16-.93-3.64-.93-1.84 0-3.29.57-4.33 1.7s-1.56 2.77-1.56 4.9v.03c.57-.66 1.29-1.15 2.16-1.49.88-.34 1.86-.51 2.96-.51 1.26 0 2.39.24 3.4.73l-.01-.01Zm-1.29 7.7c.69-.59 1.04-1.38 1.04-2.37 0-.99-.35-1.8-1.04-2.38-.69-.58-1.63-.88-2.79-.88-1.16 0-2.09.31-2.81.93-.72.62-1.08 1.41-1.08 2.36s.35 1.7 1.05 2.31c.7.61 1.68.92 2.92.92 1.11 0 2.02-.3 2.71-.89ZM454.05 104.59c1.45 1.64 2.18 4 2.18 7.07 0 2.16-.39 4-1.18 5.52-.79 1.52-1.89 2.68-3.3 3.48-1.42.79-3.05 1.19-4.92 1.19-.99 0-1.91-.11-2.78-.32-.87-.21-1.62-.52-2.26-.92l1.31-2.68c.95.62 2.17.93 3.64.93 1.84 0 3.29-.57 4.33-1.7s1.56-2.77 1.56-4.9v-.03c-.57.66-1.29 1.16-2.17 1.49-.88.34-1.86.51-2.96.51-1.26 0-2.39-.24-3.4-.73-1-.48-1.79-1.17-2.36-2.07-.57-.89-.85-1.93-.85-3.1 0-1.24.31-2.33.93-3.27a6.15 6.15 0 0 1 2.52-2.18c1.06-.51 2.25-.77 3.56-.77 2.63 0 4.67.82 6.12 2.47l.03.01Zm-3.04 5.92c.72-.62 1.08-1.41 1.08-2.36s-.35-1.7-1.05-2.31c-.7-.61-1.68-.92-2.92-.92-1.11 0-2.02.3-2.71.89-.69.59-1.04 1.38-1.04 2.37 0 .99.35 1.8 1.04 2.38.69.58 1.62.88 2.79.88s2.09-.31 2.81-.93ZM459.08 112.53h7.53v2.85h-7.53v-2.85ZM482.81 118.56v3.01h-14.14v-2.38l7.62-7.23c.86-.82 1.44-1.54 1.74-2.15.3-.61.45-1.22.45-1.82 0-.89-.3-1.58-.9-2.05-.6-.47-1.49-.71-2.66-.71-1.96 0-3.45.67-4.49 2l-2.49-1.92c.75-1 1.76-1.79 3.03-2.34 1.27-.56 2.69-.84 4.26-.84 2.08 0 3.74.49 4.99 1.48 1.24.99 1.86 2.33 1.86 4.03 0 1.04-.22 2.02-.66 2.93-.44.91-1.28 1.95-2.52 3.12l-5.12 4.88h9.04l-.01-.01ZM497.08 112.12c.93.99 1.4 2.22 1.4 3.7 0 1.11-.28 2.13-.85 3.04-.57.91-1.42 1.64-2.56 2.18-1.14.54-2.53.81-4.18.81-1.37 0-2.69-.2-3.96-.59-1.27-.39-2.35-.94-3.25-1.63l1.53-2.77c.69.58 1.54 1.05 2.53 1.38 1 .34 2.02.51 3.08.51 1.26 0 2.25-.26 2.97-.78.72-.52 1.08-1.23 1.08-2.12 0-.89-.34-1.59-1.03-2.1-.68-.5-1.73-.75-3.14-.75h-1.75v-2.44l4.36-5.18h-8.71v-2.99h13.07v2.38l-4.66 5.53c1.77.22 3.12.82 4.05 1.81l.02.01ZM512.91 110.46c1 .48 1.79 1.17 2.36 2.07.57.89.85 1.93.85 3.1 0 1.24-.31 2.33-.93 3.27a6.15 6.15 0 0 1-2.52 2.18c-1.06.51-2.25.77-3.56.77-2.63 0-4.67-.82-6.12-2.47-1.45-1.64-2.18-4-2.18-7.07 0-2.15.39-3.99 1.18-5.52.78-1.52 1.88-2.68 3.3-3.48 1.42-.79 3.05-1.19 4.92-1.19.99 0 1.91.11 2.78.32.87.21 1.62.52 2.26.92l-1.32 2.68c-.95-.62-2.16-.93-3.64-.93-1.84 0-3.29.57-4.33 1.7s-1.56 2.77-1.56 4.9v.03c.57-.66 1.29-1.15 2.16-1.49.88-.34 1.86-.51 2.96-.51 1.26 0 2.39.24 3.4.73l-.01-.01Zm-1.29 7.7c.69-.59 1.04-1.38 1.04-2.37 0-.99-.35-1.8-1.04-2.38-.69-.58-1.63-.88-2.79-.88-1.16 0-2.09.31-2.81.93-.72.62-1.08 1.41-1.08 2.36s.35 1.7 1.05 2.31c.7.61 1.68.92 2.92.92 1.11 0 2.02-.3 2.71-.89ZM530.57 104.59c1.45 1.64 2.18 4 2.18 7.07 0 2.16-.39 4-1.18 5.52-.79 1.52-1.89 2.68-3.3 3.48-1.42.79-3.05 1.19-4.92 1.19-.99 0-1.91-.11-2.78-.32-.87-.21-1.62-.52-2.26-.92l1.31-2.68c.95.62 2.17.93 3.64.93 1.84 0 3.29-.57 4.33-1.7s1.56-2.77 1.56-4.9v-.03c-.57.66-1.29 1.16-2.17 1.49-.88.34-1.86.51-2.96.51-1.26 0-2.39-.24-3.4-.73-1-.48-1.79-1.17-2.36-2.07-.57-.89-.85-1.93-.85-3.1 0-1.24.31-2.33.93-3.27a6.15 6.15 0 0 1 2.52-2.18c1.06-.51 2.25-.77 3.56-.77 2.63 0 4.67.82 6.12 2.47l.03.01Zm-3.04 5.92c.72-.62 1.08-1.41 1.08-2.36s-.35-1.7-1.05-2.31c-.7-.61-1.68-.92-2.92-.92-1.11 0-2.02.3-2.71.89-.69.59-1.04 1.38-1.04 2.37 0 .99.35 1.8 1.04 2.38.69.58 1.62.88 2.79.88s2.09-.31 2.81-.93Z"
        />
    </svg>
)
export { JornadaSVG }