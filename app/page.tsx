<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinanceSight | AI Financial Intelligence & Narrative Tracking Terminal</title>
    <style>
        :root {
            --bg-surface: #0d1117;
            --bg-input: #161b22;
            --border-line: rgba(255,255,255,0.1);
            --text-main: #f3f4f6;
            --text-muted: #8b949e;
            --accent-purple: #c084fc;
            --accent-cyan: #22d3ee;
            --accent-green: #34d399;
            --accent-gold: #fbbf24;
            --accent-red: #f87171;
            --active-glow: #34d399;
        }
        body {
            background-color: #010409;
            color: var(--text-main);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            margin: 0;
            padding-bottom: 100px;
            antialiased: true;
        }
        .ticker-wrap {
            width: 100%;
            background: #010409;
            border-bottom: 1px solid var(--border-line);
            position: sticky;
            top: 0;
            z-index: 50;
            backdrop-filter: blur(12px);
        }
        header {
            max-w-2xl;
            margin: 0 auto;
            padding: 24px 16px 12px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .brand-logo {
            font-size: 1.25rem;
            font-weight: 800;
            letter-spacing: -0.05em;
            cursor: pointer;
        }
        .terminal-badge {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            background: var(--bg-surface);
            border: 1px solid var(--border-line);
            padding: 4px 12px;
            border-radius: 9999px;
            color: var(--text-muted);
        }
        .search-box-container {
            max-width: 2xl;
            margin: 0 auto 24px auto;
            padding: 0 16px;
            position: relative;
        }
        .search-input-screener-search {
            width: 100%;
            background: var(--bg-surface);
            border: 1px solid var(--border-line);
            border-radius: 12px;
            padding: 16px 16px 16px 48px;
            font-size: 0.875rem;
            color: #fff;
            outline: none;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
            box-sizing: border-box;
        }
        .search-input-screener-search:focus {
            border-color: rgba(52, 211, 153, 0.4);
        }
        .search-icon {
            position: absolute;
            left: 32px;
            top: 16px;
            color: #555;
        }
        .app-panel {
            display: none;
            max-width: 2xl;
            margin: 0 auto;
            padding: 0 16px;
            box-sizing: border-box;
        }
        .active-panel {
            display: block;
        }
        .data-card {
            background: var(--bg-surface);
            border: 1px solid var(--border-line);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 24px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .card-header-title {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--text-muted);
            margin-bottom: 12px;
            display: block;
        }
        .explain-container {
            border-left: 2px solid var(--bg-input);
            padding-left: 16px;
            margin-left: 8px;
            margin-top: 12px;
        }
        .explain-row {
            position: relative;
            margin-bottom: 16px;
        }
        .explain-row:last-child {
            margin-bottom: 0;
        }
        .explain-label {
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            display: block;
            margin-bottom: 2px;
        }
        .explain-value {
            font-size: 0.875rem;
            font-weight: 500;
        }
        .calc-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        .calc-input-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .calc-input-label {
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
        }
        .calc-input-box {
            background: var(--bg-input);
            border: 1px solid var(--border-line);
            border-radius: 12px;
            padding: 12px;
            color: #fff;
            font-size: 0.875rem;
            outline: none;
        }
        .calc-input-box:focus {
            border-color: rgba(34, 211, 238, 0.4);
        }
        .calc-metric-output-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-top: 24px;
        }
        .calc-output-card {
            background: var(--bg-input);
            border: 1px solid var(--border-line);
            border-radius: 12px;
            padding: 16px;
            text-align: center;
        }
        .internal-tab-bar {
            display: flex;
            background: var(--bg-input);
            padding: 4px;
            border-radius: 12px;
            border: 1px solid var(--border-line);
            margin-bottom: 20px;
        }
        .internal-tab-bar button {
            flex: 1;
            background: transparent;
            border: none;
            color: var(--text-muted);
            padding: 10px;
            font-size: 0.75rem;
            font-weight: 700;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
        }
        .internal-tab-bar .active-sub-tab {
            background: var(--bg-surface);
            color: #fff;
            border: 1px solid var(--border-line);
        }
        .sub-panel-view {
            display: none;
        }
        .active-sub-panel {
            display: block;
        }
        .signal-grid {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .signal-card {
            background: var(--bg-input);
            border: 1px solid var(--border-line);
            border-radius: 12px;
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .signal-indicator-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
        .bottom-nav-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: rgba(1, 4, 9, 0.9);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-top: 1px solid var(--border-line);
            display: flex;
            justify-content: space-around;
            align-items: center;
            z-index: 2000;
        }
        .nav-item-button {
            background: none;
            border: none;
            color: var(--text-muted);
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            cursor: pointer;
            width: 20%;
            transition: all 0.2s ease;
        }
        .nav-item-button svg {
            margin-bottom: 6px;
            width: 20px;
            height: 20px;
            fill: currentColor;
            opacity: 0.6;
            transition: transform 0.2s;
        }
        .nav-item-button.active-feed { color: var(--accent-purple); }
        .nav-item-button.active-screens { color: var(--accent-cyan); }
        .nav-item-button.active-brokerage { color: var(--accent-green); }
        .nav-item-button.active-account { color: var(--accent-gold); }
        .nav-item-button.active-feed svg,
        .nav-item-button.active-screens svg,
        .nav-item-button.active-brokerage svg,
        .nav-item-button.active-account svg {
            opacity: 1;
            transform: translateY(-2px);
        }
        .floating-pane-hud {
            position: fixed;
            bottom: 96px;
            right: 16px;
            z-index: 1000;
            cursor: pointer;
        }
        .ai-terminal-window {
            display: none;
            position: fixed;
            bottom: 150px;
            right: 16px;
            width: calc(100% - 32px);
            max-width: 360px;
            height: 400px;
            background: var(--bg-surface);
            border: 1px solid var(--border-line);
            border-radius: 16px;
            z-index: 2001;
            box-shadow: 0 12px 36px rgba(0,0,0,0.5);
            flex-direction: column;
            overflow: hidden;
        }
        .chat-container-header {
            padding: 14px;
            background: var(--bg-input);
            border-bottom: 1px solid var(--border-line);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
            font-weight: 700;
        }
        .chat-message-stream-area {
            flex: 1;
            padding: 14px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .chat-row-bubble {
            max-width: 82%;
            padding: 10px 14px;
            border-radius: 12px;
            font-size: 0.82rem;
            line-height: 1.4;
            word-wrap: break-word;
        }
        .chat-row-bubble.user {
            background: var(--bg-input);
            color: white;
            align-self: flex-end;
            border-bottom-right-radius: 2px;
            border: 1px solid var(--border-line);
        }
        .chat-row-bubble.ai {
            background: rgba(92, 211, 255, 0.03);
            color: #e2e8f0;
            align-self: flex-start;
            border-bottom-left-radius: 2px;
            border: 1px solid rgba(92, 211, 255, 0.12);
        }
        .chat-entry-row {
            padding: 12px;
            background: var(--bg-surface);
            border-top: 1px solid var(--border-line);
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .chat-entry-box {
            flex: 1;
            background: var(--bg-input);
            border: 1px solid var(--border-line);
            border-radius: 8px;
            padding: 12px;
            color: white;
            font-size: 0.82rem;
            outline: none;
        }
        .chat-dispatch-btn {
            background: var(--accent-green);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: white;
        }
    </style>
</head>
  <body>

    <div class="ticker-wrap">
        <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div>
            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
            {
                "symbols": [
                    { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500" },
                    { "proName": "FOREXCOM:NSXUSD", "title": "NASDAQ 100" }
                ],
                "colorTheme": "dark",
                "isTransparent": true,
                "locale": "en"
            }
            </script>
        </div>
    </div>

    <header>
        <div class="brand-logo" id="logoText" onclick="appRoute('feed-panel', 'btn-feed', 'purple')">financeSight<span>.online</span></div>
        <div class="terminal-badge">UI Engine v2.60</div>
    </header>

    <div class="search-box-container">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input-screener-search" id="terminalCompanySearch" placeholder="Query terminal (e.g., AAPL, NVDA, themes, market)..." onkeyup="handleSearchInputEvent()">
    </div>

    <div class="floating-pane-hud" id="chatBubbleNode" onclick="toggleChatbotConsole(true)">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="var(--accent-purple)"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.91.536 3.693 1.47 5.215L2.23 21.77a.5.5 0 0 0 .614.614l4.555-1.24A9.959 9.959 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
    </div>

    <div class="ai-terminal-window" id="aiChatbotConsoleWindow">
        <div class="chat-container-header">
            <div>Ask FinanceSight AI</div>
            <button class="chat-close-trigger" onclick="toggleChatbotConsole(false)" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:1.1rem;">×</button>
        </div>
        <div class="chat-message-stream-area" id="chatMessageFlowBox">
            <div class="chat-row-bubble ai">
                AI Terminal Online. Try queries like: <em>"Explain macro inflation impact"</em> or request deep asset narrative logs.
            </div>
        </div>
        <div class="chat-entry-row">
            <input type="text" class="chat-entry-box" id="chatbotUserInputpx" placeholder="Ask FinanceSight..." onkeypress="handleChatEnterKey(event)">
            <button class="chat-dispatch-btn" onclick="executeChatbotLogic()">🚀</button>
        </div>
    </div>

    <div id="feed-panel" class="app-panel active-panel">
        <div class="data-card" style="background: linear-gradient(180deg, rgba(192, 132, 252, 0.02) 0%, var(--bg-surface) 100%); border-color: rgba(192, 132, 252, 0.15);">
            <div class="card-header-title">
                <span style="width:6px; height:6px; background-color:var(--accent-purple); border-radius:50%; display:inline-block; box-shadow:0 0 8px var(--accent-purple); margin-right:6px;"></span>
                Today's AI Market Brief
            </div>
            <h2 style="font-size:1.3rem; font-weight:800; color:#fff; margin-bottom:12px; letter-spacing:-0.5px;">Ecosystem Structural Expansion Cycle</h2>
            <div style="display:flex; gap:10px; margin-bottom:14px;">
                <span style="background:rgba(52,211,153,0.1); color:var(--accent-green); font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:6px;">Bullish Narratives Core</span>
                <span style="background:rgba(34,211,238,0.1); color:var(--accent-cyan); font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:6px;">AI Confidence: 94%</span>
            </div>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px; line-height:1.5;">Enterprise data center compute demand structures continue cleanly absorbing short-term monetary policy corrections. Long-term accumulation profiles track structural infrastructure allocations.</p>
            <div class="explain-container">
                <div class="explain-row">
                    <span class="explain-label">Key Catalyst Vector</span>
                    <span class="explain-value" style="color:var(--accent-purple);">Post-Split Liquidity Guardrails</span>
                </div>
                <div class="explain-row">
                    <span class="explain-label">System Threat Matrix</span>
                    <span class="explain-value" style="color:var(--accent-red);">Yield Horizon Deflections</span>
                </div>
            </div>
        </div>

        <div class="data-card">
            <div class="card-header-title">Index Directory Gateways</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <button class="calc-input-box" style="text-align:left; cursor:pointer;" onclick="loadIndexedSEORoute('market-ai-sector')">🤖 Theme Generation: AI Infrastructure Buildout</button>
                <button class="calc-input-box" style="text-align:left; cursor:pointer;" onclick="loadIndexedSEORoute('stocks/nvidia')">📊 Analysis: NVDA Narrative Shift Lifecycle</button>
            </div>
        </div>

        <div id="seoDynamicPre-renderedTargetLine"></div>

        <div class="data-card" style="padding:0; overflow:hidden;">
            <div class="card-header-title" style="padding:20px 20px 0 20px;">Wall Street Live Media Wire Hub</div>
            <div style="height:450px; width:100%;">
                <div class="tradingview-widget-container" style="height:100%; width:100%;">
                    <div class="tradingview-widget-container__widget"></div>
                    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
                    {
                        "feedMode": "market",
                        "market": "stock",
                        "colorTheme": "dark",
                        "isTransparent": true,
                        "displayMode": "regular",
                        "width": "100%",
                        "height": "100%",
                        "locale": "en"
                    }
                    </script>
                </div>
            </div>
        </div>
    </div>
          <div id="screens-panel" class="app-panel">
        <div class="data-card" style="padding:0; overflow:hidden;">
            <div style="height:540px; width:100%;">
                <div class="tradingview-widget-container" style="height:100%; width:100%;">
                    <div class="tradingview-widget-container__widget"></div>
                    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
                    {
                        "width": "100%",
                        "height": "100%",
                        "defaultColumn": "overview",
                        "defaultScreen": "most_capitalized",
                        "market": "america",
                        "showToolbar": true,
                        "colorTheme": "dark",
                        "isTransparent": true,
                        "locale": "en"
                    }
                    </script>
                </div>
            </div>
        </div>
    </div>

    <div id="brokerage-panel" class="app-panel">
        <div class="data-card" id="assetAlertLinex" style="background: linear-gradient(180deg, rgba(34, 211, 238, 0.01) 0%, var(--bg-surface) 100%); border-color: rgba(34, 211, 238, 0.15);">
            <div class="card-header-title">
                <span style="width:6px; height:6px; background-color:var(--accent-cyan); border-radius:50%; display:inline-block; box-shadow:0 0 8px var(--accent-cyan); margin-right:6px;"></span>
                AI Terminal Capital Advisor
            </div>
            <h3 id="reportCompName" style="font-size:1.15rem; font-weight:800; color:#fff; margin:0 0 4px 0;">Apple Inc.</h3>
            <span id="reportCompTicker" style="font-size:0.85rem; color:var(--accent-cyan); font-weight:700;">AAPL</span>
            <p style="font-size:0.85rem; line-height:1.5; color:var(--text-muted); margin:12px 0 0 0;">Historical network analytics dashboard tracker module. Search any equity asset ticker above to trigger native database narratives.</p>
        </div>

        <div class="data-card">
            <div class="card-header-title">Wall Street Analyst Sentiment Index</div>
            <div style="display:flex; justify-content:center; align-items:center; flex-direction:column; padding:10px 0;">
                <div style="position:relative; width:220px; height:110px; overflow:hidden;">
                    <canvas id="speedometerGaugeObject" width="220" height="110"></canvas>
                    <div id="speedometerBonusDisplay" style="position:absolute; bottom:0; left:0; right:0; text-align:center; font-size:1.7rem; font-weight:900; color:var(--text-main); letter-spacing:-0.5px;">78 <span style="font-size:0.9rem; color:var(--text-muted); font-weight:600;">/ 100</span></div>
                </div>
                <div style="display:flex; justify-content:center; gap:20px; width:100%; margin-top:14px; font-size:11px; font-weight:700; color:var(--text-muted);">
                    <div>SELL: <span style="color:var(--accent-red)" id="gaugeSellValue">0</span></div>
                    <div>HOLD: <span style="color:var(--accent-gold)" id="gaugeHoldValue">1</span></div>
                    <div>BUY: <span style="color:var(--accent-green)" id="gaugeBuyValue">4</span></div>
                </div>
                <div id="speedoRatingTextBadge" style="margin-top:14px; font-weight:800; font-size:0.95rem; letter-spacing:0.05em; text-transform:uppercase;">BUY</div>
            </div>
        </div>

        <div class="internal-tab-bar">
            <button class="active-sub-tab" onclick="switchSubPanel(event, 'sub-desk1')">Consensus Dispatch</button>
            <button onclick="switchSubPanel(event, 'sub-desk2')">Narrative Trajectory Timeline</button>
        </div>

        <div id="sub-desk1" class="sub-panel-view active-sub-panel">
            <div class="data-card">
                <div class="card-header-title">Recent Momentum Alpha Signals Desk</div>
                <div class="signal-grid" id="alphaSignalDeskContainer"></div>
            </div>
            <div class="data-card">
                <div class="card-header-title">Institutional Research Target Forecasts</div>
                <div id="brokerTargetGridContainer"></div>
            </div>
        </div>

        <div id="sub-desk2" class="sub-panel-view">
            <div class="data-card">
                <div class="card-header-title">Historical Structural Story Arc Trajectory</div>
                <div class="explain-container" id="dynamicNarrativeTimelineMount" style="border-left-color: var(--accent-purple); margin-left:4px;"></div>
            </div>
        </div>
    </div>

    <div id="account-panel" class="app-panel">
        <div class="data-card" style="background: linear-gradient(180deg, rgba(251, 191, 36, 0.01) 0%, var(--bg-surface) 100%); border-color: rgba(251, 191, 36, 0.15);">
            <div class="card-header-title">Platform Financial Health Matrix Index</div>
            <div style="display:flex; justify-content:center; align-items:center; flex-direction:column; padding:10px 0;">
                <div style="position:relative; width:220px; height:110px; overflow:hidden;">
                    <canvas id="healthBonusGaugeObject" width="220" height="110"></canvas>
                    <div id="healthScoreNumberDisplay" style="position:absolute; bottom:0; left:0; right:0; text-align:center; font-size:1.7rem; font-weight:900; color:var(--text-main); letter-spacing:-0.5px;">80 <span style="font-size:0.9rem; color:var(--text-muted); font-weight:600;">/ 100</span></div>
                </div>
                <div style="margin-top:14px; font-weight:800; font-size:0.95rem; letter-spacing:0.05em; text-transform:uppercase; color:var(--accent-green);" id="healthRatingTextBadge">EXCELLENT</div>
            </div>
            
            <div class="calc-grid" style="margin-top:10px;">
                <div class="calc-input-group">
                    <span class="calc-input-label">Savings Core Allocation</span>
                    <input type="number" class="calc-input-box" id="scoreSavings" value="25" oninput="calculateHealthMatrixScore()">
                </div>
                <div class="calc-input-group">
                    <span class="calc-input-label">Debt Exposure Safety</span>
                    <input type="number" class="calc-input-box" id="scoreDebt" value="20" oninput="calculateHealthMatrixScore()">
                </div>
                <div class="calc-input-group">
                    <span class="calc-input-label">Asset Diversification Index</span>
                    <input type="number" class="calc-input-box" id="scoreDiv" value="20" oninput="calculateHealthMatrixScore()">
                </div>
                <div class="calc-input-group">
                    <span class="calc-input-label">Emergency Cash Runway</span>
                    <input type="number" class="calc-input-box" id="scoreEmerg" value="15" oninput="calculateHealthMatrixScore()">
                </div>
            </div>
        </div>

        <div class="data-card">
            <div class="card-header-title">Terminal Computational Calculation Modules</div>
            <div class="internal-tab-bar">
                <button class="active-sub-tab" onclick="switchCalcView(event, 'calc-sip')">SIP Wealth Investment</button>
                <button onclick="switchCalcView(event, 'calc-emi')">EMI Loan Simulator</button>
                <button onclick="switchCalcView(event, 'calc-fire')">FIRE Architecture Blueprint</button>
                <button onclick="switchCalcView(event, 'calc-inflation')">Inflation Purchasing Deflection</button>
            </div>

            <div id="calc-sip" class="sub-panel-view active-sub-panel">
                <div class="calc-grid">
                    <div class="calc-input-group">
                        <span class="calc-input-label">Monthly Investment Installment</span>
                        <input type="number" class="calc-input-box" id="sipAmount" value="5000" oninput="runSipCalculationMatrix()">
                    </div>
                    <div class="calc-input-group">
                        <span class="calc-input-label">Target Annual Return Rate (%)</span>
                        <input type="number" class="calc-input-box" id="sipRate" value="12" oninput="runSipCalculationMatrix()">
                    </div>
                    <div class="calc-input-group" style="grid-column: span 2;">
                        <span class="calc-input-label">Time Frame Duration Horizon (Years)</span>
                        <input type="number" class="calc-input-box" id="sipYears" value="10" oninput="runSipCalculationMatrix()">
                    </div>
                </div>
                <div class="calc-metric-output-row">
                    <div class="calc-output-card">
                        <span class="calc-input-label">Principal Invested</span>
                        <div id="outSipPrincipal" style="font-size:1.25rem; font-weight:800; color:#fff; margin-top:6px;">₹6,00,000</div>
                    </div>
                    <div class="calc-output-card" style="border-left:3px solid var(--accent-green); background:rgba(52,211,153,0.02)">
                        <span class="calc-input-label" style="color:var(--accent-green)">Estimated Future Wealth</span>
                        <div id="outSipTotal" style="font-size:1.25rem; font-weight:800; color:var(--accent-green); margin-top:6px;">₹11,61,695</div>
                    </div>
                </div>
            </div>

            <div id="calc-emi" class="sub-panel-view">
                <div class="calc-grid">
                    <div class="calc-input-group">
                        <span class="calc-input-label">Principal Loan Amount (₹)</span>
                        <input type="number" class="calc-input-box" id="emiPrincipal" value="500000" oninput="runEmiCalculationMatrix()">
                    </div>
                    <div class="calc-input-group">
                        <span class="calc-input-label">Annual Borrowing Interest Rate (%)</span>
                        <input type="number" class="calc-input-box" id="emiRate" value="8.5" oninput="runEmiCalculationMatrix()">
                    </div>
                    <div class="calc-input-group" style="grid-column: span 2;">
                        <span class="calc-input-label">Loan Term Lifecycle (Months)</span>
                        <input type="number" class="calc-input-box" id="emiMonths" value="60" oninput="runEmiCalculationMatrix()">
                    </div>
                </div>
                <div class="calc-metric-output-row">
                    <div class="calc-output-card" style="border-left:3px solid var(--accent-cyan); background:rgba(34,211,238,0.02)">
                        <span class="calc-input-label" style="color:var(--accent-cyan)">Monthly EMI Premium</span>
                        <div id="outEmiMonthly" style="font-size:1.25rem; font-weight:800; color:var(--accent-cyan); margin-top:6px;">₹10,258</div>
                    </div>
                    <div class="calc-output-card">
                        <span class="calc-input-label">Aggregate Interest Payable</span>
                        <div id="outEmiInterest" style="font-size:1.25rem; font-weight:800; color:#fff; margin-top:6px;">₹1,15,483</div>
                    </div>
                </div>
            </div>

            <div id="calc-fire" class="sub-panel-view">
                <div class="calc-grid">
                    <div class="calc-input-group">
                        <span class="calc-input-label">Anticipated Annual Maintenance Budget (₹)</span>
                        <input type="number" class="calc-input-box" id="fireExpenses" value="600000" oninput="runFireCalculationMatrix()">
                    </div>
                    <div class="calc-input-group">
                        <span class="calc-input-label">Conservative Safe Withdrawal Rate (%)</span>
                        <input type="number" class="calc-input-box" id="fireSWR" value="4" oninput="runFireCalculationMatrix()">
                    </div>
                </div>
                <div class="calc-metric-output-row" style="grid-template-columns: 1fr;">
                    <div class="calc-output-card" style="border-left:3px solid var(--accent-purple); background:rgba(192,132,252,0.02)">
                        <span class="calc-input-label" style="color:var(--accent-purple)">Absolute Capital Corpus Freedom Target Number</span>
                        <div id="outFireNumber" style="font-size:1.35rem; font-weight:900; color:#fff; margin-top:6px;">₹1,50,000,000</div>
                    </div>
                </div>
            </div>

            <div id="calc-inflation" class="sub-panel-view">
                <div class="calc-grid">
                    <div class="calc-input-group">
                        <span class="calc-input-label">Present Cash Valuation Scale (₹)</span>
                        <input type="number" class="calc-input-box" id="inflationAmount" value="100000" oninput="runInflationCalculationMatrix()">
                    </div>
                    <div class="calc-input-group">
                        <span class="calc-input-label">Average Annualized Inflation Rate (%)</span>
                        <input type="number" class="calc-input-box" id="inflationRate" value="6" oninput="runInflationCalculationMatrix()">
                    </div>
                    <div class="calc-input-group" style="grid-column: span 2;">
                        <span class="calc-input-label">Forward Timeline Compounding Horizon (Years)</span>
                        <input type="number" class="calc-input-box" id="inflationYears" value="10" oninput="runInflationCalculationMatrix()">
                    </div>
                </div>
                <div class="calc-metric-output-row" style="grid-template-columns: 1fr;">
                    <div class="calc-output-card" style="border-left:3px solid var(--accent-red); background:rgba(248,113,113,0.02)">
                        <span class="calc-input-label" style="color:var(--accent-red)">Future Purchasing Price Equivalency</span>
                        <div id="outInflationTotal" style="font-size:1.35rem; font-weight:900; color:#fff; margin-top:6px;">₹1,79,085</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
             <div class="bottom-nav-bar">
        <button class="nav-item-button active-feed" id="btn-feed" onclick="appRoute('feed-panel', 'btn-feed', 'purple')">
            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            Wire
        </button>
        <button class="nav-item-button" id="btn-screens" onclick="appRoute('screens-panel', 'btn-screens', 'cyan')">
            <svg viewBox="0 0 24 24"><path d="M4 6h18v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6zm16 4H4v8h16v-8z"/></svg>
            Screener
        </button>
        <button class="nav-item-button" id="btn-brokerage" onclick="appRoute('brokerage-panel', 'btn-brokerage', 'green')">
            <svg viewBox="0 0 24 24"><path d="M21 18c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v12zm-2 0V6H5v12h14zM7 10h2v6H7v-6zm4-3h2v9h-2V7zm4 5h2v4h-2v-4z"/></svg>
            Desk
        </button>
        <button class="nav-item-button" id="btn-account" onclick="appRoute('account-panel', 'btn-account', 'gold')">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
            Quant Suite
        </button>
    </div>

    <script>
        function appRoute(panelId, buttonId, themeAccentName) {
            const rootNode = document.documentElement;
            if (themeAccentName === 'purple') rootNode.style.setProperty('--active-glow', '#c084fc');
            if (themeAccentName === 'cyan') rootNode.style.setProperty('--active-glow', '#22d3ee');
            if (themeAccentName === 'green') rootNode.style.setProperty('--active-glow', '#34d399');
            if (themeAccentName === 'gold') rootNode.style.setProperty('--active-glow', '#fbbf24');

            const corePanelsArray = ['feed-panel', 'screens-panel', 'brokerage-panel', 'account-panel'];
            corePanelsArray.forEach(pId => {
                const targetDomNode = document.getElementById(pId);
                if (targetDomNode) targetDomNode.style.display = 'none';
            });

            const navigationButtons = document.getElementsByClassName('nav-item-button');
            for (let i = 0; i < navigationButtons.length; i++) {
                navigationButtons[i].classList.remove('active-feed', 'active-screens', 'active-brokerage', 'active-account');
            }

            const requestedActiveView = document.getElementById(panelId);
            if (requestedActiveView) requestedActiveView.style.display = 'block';

            const targetBtnNode = document.getElementById(buttonId);
            if (targetBtnNode) {
                if (themeAccentName === 'purple') targetBtnNode.classList.add('active-feed');
                if (themeAccentName === 'cyan') targetBtnNode.classList.add('active-screens');
                if (themeAccentName === 'green') targetBtnNode.classList.add('active-brokerage');
                if (themeAccentName === 'gold') targetBtnNode.classList.add('active-account');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleChatbotConsole(show) {
            document.getElementById('aiChatbotConsoleWindow').style.display = show ? 'flex' : 'none';
            document.getElementById('chatBubbleNode').style.display = show ? 'none' : 'block';
        }

        function handleChatEnterKey(e) {
            if (e.key === 'Enter') executeChatbotLogic();
        }

        function executeChatbotLogic() {
            const input = document.getElementById('chatbotUserInputpx');
            const query = input.value.trim();
            if (!query) return;

            const flow = document.getElementById('chatMessageFlowBox');
            
            // Append User Bubble
            const userDiv = document.createElement('div');
            userDiv.className = 'chat-row-bubble user';
            userDiv.innerText = query;
            flow.appendChild(userDiv);
            
            input.value = '';
            flow.scrollTop = flow.scrollHeight;

            setTimeout(() => {
                const aiDiv = document.createElement('div');
                aiDiv.className = 'chat-row-bubble ai';
                
                let val = query.toLowerCase();
                let reply = "Processing narrative reasoning metrics... Query stock symbols directly to view structural timelines.";
                
                if (val.includes('nvda')) {
                    reply = "<strong>financeSight AI Intel:</strong> NVDA narrative metrics identify structural upside momentum. Compute supply limits confirm long-term support guardrails.";
                } else if (val.includes('aapl')) {
                    reply = "<strong>financeSight AI Intel:</strong> AAPL core ecosystem retention paths offset brief hardware cycles. Services margin growth remains exceptionally stable.";
                } else if (val.includes('inflation')) {
                    reply = "<strong>financeSight Macro Insights:</strong> Inflationary pressures cause contraction across growth multiples, while shifting capital scales toward active cash-producing enterprise equities.";
                }
                
                aiDiv.innerHTML = reply;
                flow.appendChild(aiDiv);
                flow.scrollTop = flow.scrollHeight;
            }, 600);
        }

        function renderSpeedoGaugeDial(canvasId, valueScore, colorHex) {
            const canvas = document.getElementById(canvasId);
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const cx = canvas.width / 2;
            const cy = canvas.height;
            const r = 90;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Track background arc
            ctx.beginPath();
            ctx.arc(cx, cy, r, Math.PI, 2 * Math.PI, false);
            ctx.lineWidth = 14;
            ctx.strokeStyle = '#161b22';
            ctx.stroke();

            // Filled progress arc
            ctx.beginPath();
            ctx.arc(cx, cy, r, Math.PI, Math.PI + (Math.PI * valueScore / 100), false);
            ctx.lineWidth = 14;
            ctx.strokeStyle = colorHex;
            ctx.stroke();
        }

        function calculateHealthMatrixScore() {
            const s = parseFloat(document.getElementById('scoreSavings').value) || 0;
            const d = parseFloat(document.getElementById('scoreDebt').value) || 0;
            const v = parseFloat(document.getElementById('scoreDiv').value) || 0;
            const e = parseFloat(document.getElementById('scoreEmerg').value) || 0;

            let total = s + d + v + e;
            if (total > 100) total = 100;

            document.getElementById('healthScoreNumberDisplay').innerHTML = total + ' <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">/ 100</span>';
            
            let badge = document.getElementById('healthRatingTextBadge');
            let color = '#34d399';
            if (total >= 75) {
                badge.innerText = "EXCELLENT";
                color = '#34d399';
            } else if (total >= 45) {
                badge.innerText = "STABLE";
                color = '#fbbf24';
            } else {
                badge.innerText = "RISK_ALERT";
                color = '#f87171';
            }
            badge.style.color = color;
            renderSpeedoGaugeDial('healthBonusGaugeObject', total, color);
        }

        function runSipCalculationMatrix() {
            const P = parseFloat(document.getElementById('sipAmount').value) || 0;
            const rate = parseFloat(document.getElementById('sipRate').value) || 0;
            const years = parseFloat(document.getElementById('sipYears').value) || 0;

            const i = (rate / 100) / 12;
            const n = years * 12;

            let totalValue = 0;
            if (i > 0) {
                totalValue = P * [Math.pow(1 + i, n) - 1] * (1 + i) / i;
            } else {
                totalValue = P * n;
            }

            document.getElementById('outSipPrincipal').innerText = '₹' + Math.round(P * n).toLocaleString('en-IN');
            document.getElementById('outSipTotal').innerText = '₹' + Math.round(totalValue).toLocaleString('en-IN');
        }

        function runEmiCalculationMatrix() {
            const P = parseFloat(document.getElementById('emiPrincipal').value) || 0;
            const rate = parseFloat(document.getElementById('emiRate').value) || 0;
            const months = parseFloat(document.getElementById('emiMonths').value) || 0;

            const r = (rate / 100) / 12;
            
            let emi = 0;
            if (r > 0) {
                emi = (P * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
            } else {
                emi = P / months;
            }
            const totalPayable = emi * months;

            document.getElementById('outEmiMonthly').innerText = '₹' + Math.round(emi).toLocaleString('en-IN');
            document.getElementById('outEmiInterest').innerText = '₹' + Math.round(totalPayable - P).toLocaleString('en-IN');
        }

        function runFireCalculationMatrix() {
            const exp = parseFloat(document.getElementById('fireExpenses').value) || 0;
            const swr = parseFloat(document.getElementById('fireSWR').value) || 0;

            let corpus = 0;
            if (swr > 0) corpus = exp / (swr / 100);

            document.getElementById('outFireNumber').innerText = '₹' + Math.round(corpus).toLocaleString('en-IN');
        }

        function runInflationCalculationMatrix() {
            const amount = parseFloat(document.getElementById('inflationAmount').value) || 0;
            const rate = parseFloat(document.getElementById('inflationRate').value) || 0;
            const years = parseFloat(document.getElementById('inflationYears').value) || 0;

            const futureValue = amount * Math.pow(1 + (rate / 100), years);
            document.getElementById('outInflationTotal').innerText = '₹' + Math.round(futureValue).toLocaleString('en-IN');
        }

        const narrativeData = {
            'AAPL': [
                { date: "Jan", head: "Hardware Cycle Shift", body: "Lags in global device replacement volumes thoroughly evaluated under structural projections." },
                { date: "Mar", head: "Services Ecosystem Pivot", body: "Recurring subscription margins increase to record-high capital distribution targets." },
                { date: "May", head: "AI Edge Integration", body: "Localized neural models injected natively into consumer device silicon architectures." }
            ],
            'NVDA': [
                { date: "Feb", head: "AI Hype Inflow Acceleration", body: "Massive datacenter hardware order backlogs pipeline exponential growth visibility." },
                { date: "Apr", head: "Valuation Multiples Debate", body: "Analyst models test structural margins relative to long-term cloud expenditure models." },
                { date: "May", head: "Monopoly Validation Pass", body: "Hyperscaler infrastructure capex allocations confirm complete node lock dominance." }
            ]
        };

        const signalsData = {
            'AAPL': [
                { dot: 'var(--accent-cyan)', text: "Ecosystem Rotation Inflow", details: "Institutional trackers flag asset allocation shifts into defensive mega-caps." },
                { dot: 'var(--accent-gold)', text: "Margin Expansion Spike", details: "Services division operational margins expand by 140 basis points." }
            ],
            'NVDA': [
                { dot: 'var(--accent-green)', text: "Unusual Options Activity Surge", details: "Deep out-of-the-money block purchases flag heavy bullish positioning." },
                { dot: 'var(--accent-red)', text: "Volatility Vector Deflection", details: "Intense trading volumes flag short-term variance exhaustion levels." }
            ]
        };

        const structuralAnalystDB = {
            'AAPL': { score: 78, text: "Buy", brokers: [{ name: "Bank of America", call: "Buy", target: "$225" }, { name: "Morgan Stanley", call: "Overweight", target: "$220" }, { name: "Goldman Sachs", call: "Buy", target: "$230" }] },
            'NVDA': { score: 94, text: "Strong Buy", brokers: [{ name: "Bank of America", call: "Buy", target: "$1200" }, { name: "Morgan Stanley", call: "Overweight", target: "$1160" }, { name: "Goldman Sachs", call: "Conviction Buy", target: "$1250" }] }
        };

        function triggerAiAnalyticalBrief(tickerSymbol) {
            const sym = tickerSymbol.toUpperCase().trim();
            
            // Build Chronological Narrative Arc
            const timelineMount = document.getElementById('dynamicNarrativeTimelineMount');
            const nodes = narrativeData[sym] || [{ date: "Current", head: "Baseline Tracking", body: "Asset tracking baseline metrics run stable within historical deviation parameters." }];
            let timelineHTML = '';
            nodes.forEach(n => {
                timelineHTML += `<div class="explain-row"><span class="explain-label" style="color:var(--accent-purple);">${n.date} // ${n.head}</span><span class="explain-value">${n.body}</span></div>`;
            });
            timelineMount.innerHTML = timelineHTML;

            // Build Neural Alpha Signal Streams
            const signalMount = document.getElementById('alphaSignalDeskContainer');
            const signals = signalsData[sym] || [{ dot: 'var(--text-muted)', text: "Stable Matrix", details: "No unusual volumetric activity flagged inside derivatives arrays." }];
            let signalsHTML = '';
            signals.forEach(s => {
                signalsHTML += `<div class="signal-card"><span class="signal-indicator-dot" style="background:${s.dot}; box-shadow:0 0 8px ${s.dot};"></span><div><div style="font-weight:800; font-size:0.9rem; color:#fff;">${s.text}</div><div style="font-size:0.8rem; color:var(--text-muted); margin-top:3px;">${s.details}</div></div></div>`;
            });
            signalMount.innerHTML = signalsHTML;

            // Build Forecast Ratings Index Grids
            const targetMount = document.getElementById('brokerTargetGridContainer');
            const data = structuralAnalystDB[sym] || { score: 50, text: "Hold", brokers: [{ name: "Consensus Average", call: "Hold", target: "N/A" }] };
            
            document.getElementById('speedometerBonusDisplay').innerHTML = data.score + ' <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">/ 100</span>';
            
            let badge = document.getElementById('speedoRatingTextBadge');
            badge.innerText = data.text;
            let themeHex = 'var(--accent-cyan)';
            if (data.score >= 85) themeHex = 'var(--accent-green)';
            else if (data.score >= 55) themeHex = 'var(--accent-gold)';
            else themeHex = 'var(--accent-red)';
            badge.style.color = themeHex;
            renderSpeedoGaugeDial('speedometerGaugeObject', data.score, themeHex);

            let brokerHTML = '<table style="width:100%; border-collapse:collapse; font-size:0.85rem;"><tr style="border-bottom:2px solid var(--border-line); height:35px; color:var(--text-muted); font-weight:700;"><td>Institution</td><td>Rating Call</td><td style="text-align:right;">Target Forecast</td></tr>';
            let buyCount = 0, holdCount = 0, sellCount = 0;
            
            data.brokers.forEach(b => {
                let callColor = 'var(--text-main)';
                if (b.call.includes('Buy') || b.call.includes('Overweight')) {
                    callColor = 'var(--accent-green)';
                    buyCount++;
                } else if (b.call.includes('Hold')) {
                    callColor = 'var(--accent-gold)';
                    holdCount++;
                } else {
                    callColor = 'var(--accent-red)';
                    sellCount++;
                }
                brokerHTML += `<tr style="border-bottom:1px solid var(--border-line); height:42px; font-weight:600;"><td style="color:#fff;">${b.name}</td><td style="color:${callColor}; font-size:0.8rem;">${b.call}</td><td style="text-align:right; color:var(--accent-cyan); font-weight:700;">${b.target}</td></tr>`;
            });
            brokerHTML += '</table>';
            targetMount.innerHTML = brokerHTML;

            document.getElementById('gaugeBuyValue').innerText = buyCount;
            document.getElementById('gaugeHoldValue').innerText = holdCount;
            document.getElementById('gaugeSellValue').innerText = sellCount;
        }

        function handleSearchInputEvent() {
            const val = document.getElementById('terminalCompanySearch').value.trim().toUpperCase();
            if (narrativeData[val]) {
                document.getElementById('reportCompName').innerText = val === 'AAPL' ? 'Apple Inc.' : 'NVIDIA Corporation';
                document.getElementById('reportCompTicker').innerText = val;
                triggerAiAnalyticalBrief(val);
                appRoute('brokerage-panel', 'btn-brokerage', 'green');
            }
        }

        function switchSubPanel(e, targetId) {
            const card = e.currentTarget.closest('.data-card');
            const tabs = card.getElementsByClassName('internal-tab-bar')[0].getElementsByTagName('button');
            const panels = card.getElementsByClassName('sub-panel-view');
            
            for (let i = 0; i < tabs.length; i++) tabs[i].classList.remove('active-sub-tab');
            for (let i = 0; i < panels.length; i++) panels[i].classList.remove('active-sub-panel');
            
            e.currentTarget.classList.add('active-sub-tab');
            document.getElementById(targetId).classList.add('active-sub-panel');
        }

        function switchCalcView(e, targetId) {
            const card = e.currentTarget.closest('.data-card');
            const tabs = card.getElementsByClassName('internal-tab-bar')[0].getElementsByTagName('button');
            const panels = card.getElementsByClassName('sub-panel-view');
            
            for (let i = 0; i < tabs.length; i++) tabs[i].classList.remove('active-sub-tab');
            for (let i = 0; i < panels.length; i++) panels[i].classList.remove('active-sub-panel');
            
            e.currentTarget.classList.add('active-sub-tab');
            document.getElementById(targetId).classList.add('active-sub-panel');
        }

        window.onload = function() {
            triggerAiAnalyticalBrief('AAPL');
            calculateHealthMatrixScore();
            runSipCalculationMatrix();
            runEmiCalculationMatrix();
            runFireCalculationMatrix();
            runInflationCalculationMatrix();
        };
    </script>
</body>
</html>
              
      
