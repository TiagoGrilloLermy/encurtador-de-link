            async function encurtarLink() {
                const linkInput = document.getElementById("linkInput").value;
                const accessToken = '9949659fe67de40d1daddec441ddcb8c376af4ce';
                const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
    
                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + accessToken
                        },
                        body: JSON.stringify({
                            long_url: linkInput
                        })
                    });
    
                    const data = await response.json();
                    const shortenedLinkContainer = document.getElementById("shortenedLinkContainer");
                    shortenedLinkContainer.style.display = "block";
                    document.getElementById("shortenedLink").innerHTML = "<a href='" + data.id + "' target='_blank'>" + data.id + "</a>";
                } catch (error) {
                    console.error('Erro ao encurtar o link:', error);
                    const errorContainer = document.getElementById("errorContainer");
                    errorContainer.style.display = "block";
                    errorContainer.innerHTML = "Erro ao encurtar o link.";
                }
            }
    
            function copiarLink() {
                const linkText = document.getElementById("shortenedLink").textContent;
                const tempInput = document.createElement("input");
                tempInput.value = linkText;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
                alert("Link copiado para a área de transferência!");
            }
