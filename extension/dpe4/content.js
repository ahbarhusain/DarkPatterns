chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Content.js received message: ', request);
    if (request.type === 'SET_DEPTH') {
        console.log('Content.js received SET_DEPTH message with depth: ', request.depth);
        styleElementsAtSpecificDepth(document.body, parseInt(request.depth, 10));
    }
    });

function check() {
    // Return a random integer between 0 and 10
    return Math.floor(Math.random() * 11);
}
    


function styleElementsAtSpecificDepth(root, targetDepth) {
    const styleId = 'dynamic-depth-hover-style';
    const baseClassName = 'depth-hover-style';

    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
        existingStyle.remove();
    }

    function clearPreviousStyles() {
        document.querySelectorAll(`.${baseClassName}`).forEach(element => {
            const classListToRemove = Array.from(element.classList).filter(className => className.startsWith(baseClassName));
            classListToRemove.forEach(className => element.classList.remove(className));
        });
    }
  
    clearPreviousStyles();
    console.log('Cleared previous styles');
  
    function collectElementsAtDepth(node, currentDepth = 0) {
        if (currentDepth === targetDepth) {
            return [node];
        }
        return Array.from(node.childNodes).reduce((acc, child) => {
            if (child.nodeType === Node.ELEMENT_NODE) {
                acc.push(...collectElementsAtDepth(child, currentDepth + 1));
            }
            return acc;
        }, []);
    }
  
    const elementsAtDepth = collectElementsAtDepth(root, 0);
    const depthClassName = `${baseClassName}-${targetDepth}`;
    const gaugeIndicator = `
            <div class="gauge-indicator">
                <div class="needle"></div>
            </div>
        `;

    // Define a simple mapping from integers to colors
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime', 'brown'];

    elementsAtDepth.forEach(element => {
        const randomIndex = check(); // This will now give us a random integer between 0 and 10
        const color = colors[randomIndex];
        const backgroundColor = `rgba(${randomIndex * 25}, ${randomIndex * 10}, ${randomIndex * 15}, 0.7)`;
        const depthClass = `${depthClassName}-${color}`;

        element.classList.add(depthClass);
        
        const css = `
            .${depthClass}:hover {
                border: 5px solid ${color} !important;
                position: relative;
            }
            .${depthClass} * {
                pointer-events: none; !important;
            }
            .${depthClass}:hover::after {
                ${gaugeIndicator}
            }
            .${depthClass}:hover::after {
                content: '';
                position: absolute;
                bottom: -5px; /* Adjust as needed */
                right: -5px; /* Adjust as needed */
                width: 30px; /* Adjust as needed */
                height: 30px; /* Adjust as needed */
                background: conic-gradient(
                    red 0%,
                    orange 20%,
                    yellow 40%,
                    green 60%,
                    blue 80%,
                    red 100%
                );
                border-radius: 50%;
                border: 5px solid transparent;
                animation: rotate 1s linear infinite;
                display: block;
                visibility: visible;
                pointer-events: none;
                z-index: 100;
            }
            @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            .${depthClass}::after {
                visibility: hidden;
                pointer-events: none;
            }
        `;
        
        // Append the CSS if it hasn't been added yet
        if (!document.querySelector(`#${styleId}-${depthClass}`)) {
            const styleElement = document.createElement('style');
            styleElement.id = `${styleId}-${depthClass}`;
            document.head.appendChild(styleElement);
            styleElement.appendChild(document.createTextNode(css));
        }
    });
    console.log('Applied new styles for depth: ', targetDepth);
}

