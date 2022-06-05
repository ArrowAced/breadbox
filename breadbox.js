class breadbox {
    constructor (runtime, extensionId) {
		this.icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE2NyIgaGVpZ2h0PSIxMTE2IiB2aWV3Qm94PSIwIDAgMTE2NyAxMTE2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwNSA5My42MTFDMTM4LjU1IDE1NS43ODEgNDEuMzIgMTk3LjQ0MSAyNSAyMTMuNTYxQzIuODkgMjM1LjQxMSAwIDIzOC42NzEgMCAzMDIuOTYxQzAgMzU1LjM1MSA0Ljg5IDM4My4xMTEgMTcuNSA0MDIuMzUxQzMyLjc0IDQyNS42MTEgMzUuMDEgNDU1Ljg1MSAzNS4wNiA2MzYuOTExQzM1LjA5IDc1MS4yMzEgMzkuNzIgODYxLjM1MSA0NS4zNSA4ODEuNjIxQzUwLjk4IDkwMS44OTEgNjguMTcgOTI5LjA3MSA4My41NiA5NDIuMDExQzk4Ljk1IDk1NC45NjEgMjA3Ljk0IDEwMDMuMDYgMzI1Ljc3IDEwNDguODlDNTI0LjE3IDExMjYuMDggNTQyLjIyIDExMjAuMzIgNTcwIDExMDguODJDNTg2LjUgMTEwMS45OSA3MDUuNzUgMTA1OC4zOSA4MzUgMTAxMS45MkMxMDIwLjM1IDk0NS4yOTEgMTA3NS44MSA5MzIuMjExIDEwOTcuNSA5MDguOTQxTDEwOTYgODc5LjQ0MUwxMTI1IDY5MC4xMzFDMTEyNSA1MDUuNTAxIDExMTQuNjQgNDk5LjYzMSAxMTM5Ljg5IDQ1Mi43OTFDMTE2Mi4xNCA0MTEuNTExIDExNjQuOTcgMzk2LjY1MSAxMTYwLjAxIDM0Ny4wMTFDMTE1MS40NCAyNjEuMDgxIDExMDcuNTkgMjI2LjM0MSAxMDQ2LjY0IDE5NC42MjFDOTkyLjk3IDE2Ni43MDEgNTg5Ljc2IDIwLjc3MSA1NjcuMDkgMjEuMDYxQzU1NC4zOSAyMS4yMjEgNDQ1LjI1IDQxLjIyMSAzMDUgOTMuNjExWiIgZmlsbD0iI0ZGREVBNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyMi42MyA4My4wMTA4QzIwMy4wOCAxMjcuOTcxIDEwNS4zMyAxNjkuMjYxIDEwNS40MSAxNzQuNzYxQzEwNS40OCAxODAuMjYxIDE4OS44IDIxNS43NzEgMjkyLjc3IDI1My42NzFDNTczLjAxIDM1Ni44MDEgNTk5LjMzIDM3MC41ODEgNjM1LjAzIDQzMi44MzFDNjcwLjk4IDQ5NS41MTEgNjc0LjQ4IDU2Mi45MTEgNjQ1LjE0IDYyNy41NTFDNjI4LjAzIDY2NS4yNDEgNjI1LjYxIDY5NS4wMjEgNjI0Ljc4IDg3Ny41NTFDNjI0LjAyIDEwNDIuNjggNjI2LjQ5IDEwODQuNSA2MzYuOTIgMTA4My40NkM2NTQuNDQgMTA4MS43MiAxMDIxLjE4IDk1MS41ODEgMTA2Mi45NCA5MzIuMjgxQzExMTkuMjYgOTA2LjI2MSAxMTI1IDg4Mi41MzEgMTEyNSA2NzUuNTAxQzExMjUgNTA3Ljk2MSAxMTI2LjkxIDQ4Ny4xMTEgMTE0NC45NiA0NTcuNTAxQzExODcuNTUgMzg3LjY2MSAxMTYzLjkgMjU4LjkyMSAxMDk2LjkzIDE5Ni4wMzFDMTA1NC45OSAxNTYuNjQxIDY0MC42IC0wLjU1OTE5MyA1ODEuNTIgMC41MTA4MDdDNTU1LjQxIDAuOTgwODA3IDQ1OS4zNSAzMS42MDA4IDMyMi42MyA4My4wMTA4WiIgZmlsbD0iI0YzQUM2MCIvPgo8L3N2Zz4K';
		this.deprecationicon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNTAuNjAwMzQiIGhlaWdodD0iMzEzLjE4NjIiIHZpZXdCb3g9IjAsMCwzNTAuNjAwMzQsMzEzLjE4NjIiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NC42OTk4MywtMjMuNDA2OSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMDguODEwMzksNDEuNDE0MzljMTMuODYyMTUsLTI0LjAwOTk0IDQ4LjUxNzE3LC0yNC4wMTAwMSA2Mi4zNzkzMywtMC4wMDAwN2wxMzkuMjMxNjIsMjQxLjE1NjM2YzEzLjg2MjE1LDI0LjAwOTcyIC0zLjQ2NTM2LDU0LjAyMjQyIC0zMS4xODk2Niw1NC4wMjI0MmgtMjc4LjQ2MzA5Yy0yNy43MjQzLDAgLTQ1LjA1MjEsLTMwLjAxMjY5IC0zMS4xODk5NSwtNTQuMDIyNDJ6IiBmaWxsPSIjZTc2NzY3Ii8+PHBhdGggZD0iTTIwOC44MTAzOSwxMDYuOTU3NDljMTMuODYyODcsLTI0LjAwOSA0OC41MTY0NSwtMjQuMDA5IDYyLjM3OTMzLDBsNzkuMjI4NTYsMTM3LjIyMDU0YzEzLjg2MzU5LDI0LjAwOTcyIC0zLjQ2NDY0LDU0LjAyMzE0IC0zMS4xODg5NCw1NC4wMjMxNGgtMTU4LjQ1ODU2Yy0yNy43MjQzLDAgLTQ1LjA1MjU0LC0zMC4wMTM0MSAtMzEuMTg4OTQsLTU0LjAyMzE0eiIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0yNTYuMDQ2ODcsMTMzLjgxNTk5bC0yLjk0MTcsOTAuODY4NTloLTI2LjI4MjI3bC0yLjk0MTcsLTkwLjg2ODU5ek0yMzkuOTMyMzQsMjY2LjYzNDA3Yy00LjU2MTY1LDAgLTguNDgzNjgsLTEuNjE5OTUgLTExLjc2NjgsLTQuODYwNThjLTMuMjM5OSwtMy4yMzk5IC00Ljg1OTg2LC03LjE2MTkzIC00Ljg1OTg2LC0xMS43NjYwOGMwLC00LjUxODQ0IDEuNjE5OTUsLTguMzc3MDggNC44NTk4NiwtMTEuNTc0NDhjMy4yODMxMiwtMy4yMzk5IDcuMjA1MTUsLTQuODU5ODYgMTEuNzY2OCwtNC44NTk4NmM0LjM5MDk0LDAgOC4yNDg4NiwxLjYxOTk1IDExLjU3NDQ4LDQuODU5ODZjMy4zNjc0LDMuMTk3NDEgNS4wNTE0Niw3LjA1NjA1IDUuMDUxNDYsMTEuNTc0NDhjMCwzLjA2OTkxIC0wLjc4ODczLDUuODYxNzkgLTIuMzY2MTgsOC4zNzcwOGMtMS41MzQyNCwyLjUxNTI4IC0zLjU1OTcyLDQuNTE5MTYgLTYuMDc1LDYuMDEwODljLTIuNDcyNzksMS40OTI0NiAtNS4yMDA1NiwyLjIzODY5IC04LjE4NDc2LDIuMjM4Njl6IiBmaWxsPSIjZTc2NzY3Ii8+PC9nPjwvZz48L3N2Zz4=';
        this.runtime = runtime;
    }

    getInfo () {
        return {
            "id": 'breadbox',
            "name": 'breadbox',
			"blockIconURI": this.icon,
			"menuIconURI": this.icon,
            "blocks": [
                {
                    "opcode": "fetchFromURL",
                    "blockType": "reporter",
                    "text": "fetch data from [URL]",
                    "arguments": {
                        "URL": {
                            "type": "string",
                            "defaultValue": "https://api.github.com/status"
                        },
                    },
                },
				{
                    "opcode": "startsWith",
                    "blockType": "Boolean",
                    "text": "[VAL1] starts with [VAL2]?",
                    "arguments": {
                        "VAL1": {
                            "type": "string",
                            "defaultValue": "foobar",
                        },
                        "VAL2": {
                            "type": "string",
                            "defaultValue": "foo",
                        },
                    },
                },
                {
                    "opcode": "endsWith",
                    "blockType": "Boolean",
                    "text": "[VAL1] ends with [VAL2]?",
                    "arguments": {
                        "VAL1": {
                            "type": "string",
                            "defaultValue": "foobar",
                        },
                        "VAL2": {
                            "type": "string",
                            "defaultValue": "bar",
                        },
                    },
                },
                {
                    "opcode": "replaceWith",
                    "blockType": "reporter",
                    "text": "replace [VAL1] with [VAL2] in [VAL3]",
                    "arguments": {
                        "VAL1": {
                            "type": "string",
                            "defaultValue": "foo",
                        },
                        "VAL2": {
                            "type": "string",
                            "defaultValue": "bar",
                        },
                        "VAL3": {
                            "type": "string",
                            "defaultValue": "foobar",
                        },
                    },
                },
                {
                    "opcode": "firstLettersOf",
                    "blockType": "reporter",
                    "text": "first [VAL1] letters of [VAL2]",
                    "arguments": {
                        "VAL1": {
                            "type": "number",
                            "defaultValue": "3",
                        },
                        "VAL2": {
                            "type": "string",
                            "defaultValue": "foobar",
                        },
                    },
                },
                {
                    "opcode": "lastLettersOf",
                    "blockType": "reporter",
                    "text": "last [VAL1] letters of [VAL2]",
                    "arguments": {
                        "VAL1": {
                            "type": "number",
                            "defaultValue": "3",
                        },
                        "VAL2": {
                            "type": "string",
                            "defaultValue": "foobar",
                        },
                    },
                },
                {
                    "opcode": "lettersToOf",
                    "blockType": "reporter",
                    "text": "letters [VAL1] to [VAL2] of [VAL3]",
                    "arguments": {
                        "VAL1": {
                            "type": "number",
                            "defaultValue": "1",
                        },
                        "VAL2": {
                            "type": "number",
                            "defaultValue": "3",
                        },
                        "VAL3": {
                            "type": "string",
                            "defaultValue": "foobar",
                        },
                     },
                },
                {
                    "opcode": "occurencesOf",
                    "blockType": "reporter",
                    "text": "occurences of [VAL1] in [VAL2]",
                    "arguments": {
                        "VAL1": {
                            "type": "string",
                            "defaultValue": "foo",
                        },
                        "VAL2": {
                            "type": "string",
                            "defaultValue": "foobar",
                        },
                    },
                },
                {
                    "opcode": "locationOfIn",
                    "blockType": "reporter",
                    "text": "location [VAL1] of [VAL2] in [VAL3]",
                    "arguments": {
                        "VAL1": {
                            "type": "number",
                            "defaultValue": "1",
                        },
                        "VAL2": {
                            "type": "string",
                            "defaultValue": "foo",
                        },
                        "VAL3": {
                            "type": "string",
                            "defaultValue": "foobar",
                        },
                    },
                },
                {
                    "opcode": "everythingAfterLocationIn",
                    "blockType": "reporter",
                    "text": "everything after location [VAL1] in [VAL2]",
                    "arguments": {
                        "VAL1": {
                            "type": "number",
                            "defaultValue": "4",
                        },
                        "VAL2": {
                            "type": "string",
                            "defaultValue": "foobar",
                        },
                    },
                },
			],
        };
    };

    fetchFromURL({URL}) {
        return fetch(URL).then(response => response.text());
    };

    startsWith({VAL1, VAL2}) {
        if (VAL1.startsWith(VAL2)) {
            return true;
        } else {
            return false;
        }
    };

    endsWith({VAL1, VAL2}) {
        if (VAL1.endsWith(VAL2)) {
            return true;
        } else {
            return false;
        }
    };

    replaceWith({VAL1, VAL2, VAL3}) {
        return VAL3.replace(VAL1, VAL2);
    };

    firstLettersOf({VAL1, VAL2}) {
        return VAL2.substring(0, VAL1);
    };

    lastLettersOf({VAL1, VAL2}) {
        return VAL2.substring(VAL2.length - VAL1);
    };

    lettersToOf({VAL1, VAL2, VAL3}) {
        return VAL3.substring(VAL1 - 1, VAL2);
    };

    occurencesOf({VAL1, VAL2}) {
        return VAL2.split(VAL1).length - 1;
    };

    locationOfIn({VAL1, VAL2, VAL3}) {
        return VAL3.indexOf(VAL2, VAL1 - 1) + 1;
    };

    everythingAfterLocationIn({VAL1, VAL2}) {
        return VAL2.substring(VAL1 - 1);
    };
};

(function() {
    var extensionClass = breadbox;
    if (typeof window === "undefined" || !window.vm) {
        Scratch.extensions.register(new extensionClass());
		console.log("Sandboxed mode detected, performance will suffer because of the extension being sandboxed.");
    } else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime);
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
		console.log("Unsandboxed mode detected. Good.");
    };
})()
