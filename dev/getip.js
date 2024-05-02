// connor33341
export function GetLocalIPs() {
    return new Promise((resolve, reject) => {
        const ipAddresses = [];
        const pc = new RTCPeerConnection({ iceServers: [] });
        pc.createDataChannel('');
        pc.onicecandidate = (e) => {
            if (!e.candidate) {
                resolve(ipAddresses);
                pc.close();
            } else {
                const ipRegex = /\d+\.\d+\.\d+\.\d+/;
                const ipAddress = ipRegex.exec(e.candidate.candidate)[0];

                if (!ipAddresses.includes(ipAddress)) {
                    ipAddresses.push(ipAddress);
                }
            }
        };

        pc.createOffer()
            .then(offer => pc.setLocalDescription(offer))
            .catch(error => reject(error));
    });
}
