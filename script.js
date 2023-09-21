document.addEventListener("DOMContentLoaded", function () {
    const scanButton = document.getElementById("scanButton");
    const ipAddressInput = document.getElementById("ipAddress");
    const scanResults = document.getElementById("scanResults");

    scanButton.addEventListener("click", function () {
        const ipAddress = ipAddressInput.value;
        scanResults.innerHTML = "Scanning ports...";

        // Simulate a network scan (replace this with actual scanning logic)
        setTimeout(function () {
            const openPorts = [80, 443, 22]; // Example open ports
            displayScanResults(openPorts);
        }, 2000);
    });

    function displayScanResults(openPorts) {
        let resultHtml = "<h3>Open Ports:</h3><ul>";
        openPorts.forEach(function (port) {
            resultHtml += `<li>${port}</li>`;
        });
        resultHtml += "</ul>";
        scanResults.innerHTML = resultHtml;
    }
});
