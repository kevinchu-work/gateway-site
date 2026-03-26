const initWidgetOption = {
    "width": 300,
    "height": 300,

    "interval": "D",
    "timezone": "exchange",
    "theme": "light",
    "style": "9",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "hide_top_toolbar": true,
    "save_image": false,
};

const onClick = () => {
    const s = document.getElementById("symbolInput").value;
    const sAry = s.split(",");
    const w = document.getElementById("chartWrapper");

    sAry.forEach(e => {
        // Create Chart element
        const idKey = `tradingview_` + crypto.randomUUID();

        const c = document.createElement('div');
        c.setAttribute('id', idKey);
        c.classList.add("tradingview_widget");
        w.append(c);

        // Load chart
        try {
            new TradingView.widget({
                ...initWidgetOption,
                ...{
                    "symbol": e,
                    "container_id": idKey
                }
            });
        } catch (error) {
            console.error(`Error loading widget for symbol ${e}:`, error);
            alert(`Failed to load chart for symbol ${e}. Check the console for details.`);
        }

    });
};

document.getElementById("loadWidget").addEventListener("click", onClick);
