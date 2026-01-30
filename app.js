const state = {
  tournamentName: "",
  levels: [
    { small: 100, big: 200, duration: 15, isBreak: false },
    { small: 0, big: 0, duration: 10, isBreak: true },
    { small: 200, big: 400, duration: 15, isBreak: false },
  ],
  currentLevelIndex: 0,
  secondsRemaining: 15 * 60,
  clockRunning: false,
  buyinValue: 100,
  buyinChips: 20000,
  rebuyValue: 100,
  rebuyChips: 20000,
  addonValue: 100,
  addonChips: 20000,
  rebuyLimit: 2,
  addonLimit: 1,
  players: [],
  valuesEditing: false,
  started: false,
  editingPlayerId: null,
  expensesEditing: false,
  expensesMode: null,
  prizeWinners: 5,
  prizeSplits: [],
  prizeAmounts: [],
  prizeSaved: false,
  tablesCount: 1,
  tablesMode: null,
  tableChipAdjustments: {},
  tablesLocked: false,
  expenses: [],
  chipValues: [100, 500, 1000, 5000, 10000],
  tournamentStartTs: null,
  elapsedSeconds: 0,
  lastStartTs: null,
  levelEndTs: null,
  tableAssignmentEvent: null,
  transferEvents: [],
  tournamentStartEvent: null,
  finalTableEvent: null,
  championEvent: null,
  tournamentEndEvent: null,
};

const elements = {
  navButtons: document.querySelectorAll(".nav-btn"),
  navButtonsContainer: document.getElementById("navButtons"),
  views: document.querySelectorAll(".view"),
  tournamentName: document.getElementById("tournamentName"),
  clockLevel: document.getElementById("clockLevel"),
  clockBlinds: document.getElementById("clockBlinds"),
  clockTime: document.getElementById("clockTime"),
  clockStartTime: document.getElementById("clockStartTime"),
  clockStart: document.getElementById("clockStart"),
  clockPause: document.getElementById("clockPause"),
  clockEdit: document.getElementById("clockEdit"),
  clockPrev: document.getElementById("clockPrev"),
  clockNext: document.getElementById("clockNext"),
  clockReset: document.getElementById("clockReset"),
  blindSmall: document.getElementById("blindSmall"),
  blindBig: document.getElementById("blindBig"),
  blindDuration: document.getElementById("blindDuration"),
  blindBreak: document.getElementById("blindBreak"),
  addLevel: document.getElementById("addLevel"),
  levelsList: document.getElementById("levelsList"),
  buyinValue: document.getElementById("buyinValue"),
  buyinChips: document.getElementById("buyinChips"),
  rebuyValue: document.getElementById("rebuyValue"),
  rebuyChips: document.getElementById("rebuyChips"),
  addonValue: document.getElementById("addonValue"),
  addonChips: document.getElementById("addonChips"),
  chipValue1: document.getElementById("chipValue1"),
  chipValue2: document.getElementById("chipValue2"),
  chipValue3: document.getElementById("chipValue3"),
  chipValue4: document.getElementById("chipValue4"),
  chipValue5: document.getElementById("chipValue5"),
  rebuyLimit: document.getElementById("rebuyLimit"),
  addonLimit: document.getElementById("addonLimit"),
  payoutTotal: document.getElementById("payoutTotal"),
  payoutIncomeList: document.getElementById("payoutIncomeList"),
  payoutExpensesSummary: document.getElementById("payoutExpensesSummary"),
  payoutNet: document.getElementById("payoutNet"),
  payoutPrizeSummary: document.getElementById("payoutPrizeSummary"),
  payoutPrizeTotal: document.getElementById("payoutPrizeTotal"),
  addExpense: document.getElementById("addExpense"),
  editExpenses: document.getElementById("editExpenses"),
  togglePrize: document.getElementById("togglePrize"),
  prizeFields: document.getElementById("prizeFields"),
  prizeWinners: document.getElementById("prizeWinners"),
  prizeList: document.getElementById("prizeList"),
  calculatePrizes: document.getElementById("calculatePrizes"),
  savePrizes: document.getElementById("savePrizes"),
  clearPrizes: document.getElementById("clearPrizes"),
  tablesCount: document.getElementById("tablesCount"),
  saveTablesCount: document.getElementById("saveTablesCount"),
  editTablesCount: document.getElementById("editTablesCount"),
  tablesActions: document.getElementById("tablesActions"),
  manualTables: document.getElementById("manualTables"),
  randomTables: document.getElementById("randomTables"),
  viewTables: document.getElementById("viewTables"),
  transferTables: document.getElementById("transferTables"),
  transferFields: document.getElementById("transferFields"),
  transferSource: document.getElementById("transferSource"),
  createFinalTable: document.getElementById("createFinalTable"),
  transferList: document.getElementById("transferList"),
  tablesList: document.getElementById("tablesList"),
  expensesList: document.getElementById("expensesList"),
  playerName: document.getElementById("playerName"),
  playerStatus: document.getElementById("playerStatus"),
  addPlayer: document.getElementById("addPlayer"),
  playersList: document.getElementById("playersList"),
  playersCount: document.getElementById("playersCount"),
  rebuyList: document.getElementById("rebuyList"),
  eventsList: document.getElementById("eventsList"),
  summaryTournament: document.getElementById("summaryTournament"),
  summaryBuyin: document.getElementById("summaryBuyin"),
  summaryRebuy: document.getElementById("summaryRebuy"),
  summaryAddon: document.getElementById("summaryAddon"),
  summaryPlayers: document.getElementById("summaryPlayers"),
  summaryPaid: document.getElementById("summaryPaid"),
  editValues: document.getElementById("editValues"),
  saveValues: document.getElementById("saveValues"),
  exportConfigAdmin: document.getElementById("exportConfigAdmin"),
  exportPlayersAdmin: document.getElementById("exportPlayersAdmin"),
  importPlayersFile: document.getElementById("importPlayersFile"),
  importPlayers: document.getElementById("importPlayers"),
  historyTitle: document.getElementById("historyTitle"),
  historyDate: document.getElementById("historyDate"),
  historyChampion: document.getElementById("historyChampion"),
  historyParticipants: document.getElementById("historyParticipants"),
  historyRebuys: document.getElementById("historyRebuys"),
  historyAddons: document.getElementById("historyAddons"),
  historyValues: document.getElementById("historyValues"),
  historyPlacement: document.getElementById("historyPlacement"),
  addHistory: document.getElementById("addHistory"),
  restartTournament: document.getElementById("restartTournament"),
  historyList: document.getElementById("historyList"),
  historyYears: document.getElementById("historyYears"),
  historyDetails: document.getElementById("historyDetails"),
  historyTournaments: document.getElementById("historyTournaments"),
  importHistoryFile: document.getElementById("importHistoryFile"),
  importHistory: document.getElementById("importHistory"),
  startScreen: document.getElementById("startScreen"),
  dashboardScreen: document.getElementById("dashboardScreen"),
  backToStart: document.getElementById("backToStart"),
  startTournament: document.getElementById("startTournament"),
  openDisplay: document.getElementById("openDisplay"),
  importConfigFile: document.getElementById("importConfigFile"),
  importConfigBtn: document.getElementById("importConfigBtn"),
  startWithoutImport: document.getElementById("startWithoutImport"),
  championPhotoModal: document.getElementById("championPhotoModal"),
  championPhotoModalImage: document.getElementById("championPhotoModalImage"),
  championPhotoModalPlaceholder: document.getElementById("championPhotoModalPlaceholder"),
  championPhotoModalTitle: document.getElementById("championPhotoModalTitle"),
};

const STORAGE_KEY = "poker_fazenda_state_v2";
const HISTORY_KEY = "poker_fazenda_history_v1";
const HISTORY_TOURNAMENTS_KEY = "poker_fazenda_tournaments_v1";
const COMMAND_KEY = "poker_fazenda_command_v1";
const SCRIPT_URL_KEY = "poker_fazenda_script_url_v1";

/** Histórico fixo de torneios (edite aqui os 10 torneios). photoUrl = caminho ou URL da foto do campeão (ex: "fotos/2015-2016.jpg"). */
const STATIC_HISTORY = [
  { title: "1º Torneio de Poker - Ano 2015/2016", champion: "THIAGO TSUGE", viceChampion: "MARCOS TSUGE", photoUrl: "fotos/2015-2016.jpg" },
  { title: "2º Torneio de Poker - Ano 2016/2017", champion: "THIAGO TSUGE", viceChampion: "ANDRÉ EIJI", photoUrl: "fotos/2016-2017.jpg" },
  { title: "3º Torneio de Poker - Ano 2017/2018", champion: "ANDRÉ EIJI", viceChampion: "GUILHERME TSUGE", photoUrl: "" },
  { title: "4º Torneio de Poker - Ano 2018/2019", champion: "GUILHERME TSUGE", viceChampion: "LEONARDO TSUGE", photoUrl: "" },
  { title: "5º Torneio de Poker - Ano 2019/2020", champion: "FELIPE SANTANA", viceChampion: "LEONEL TSUGE", photoUrl: "" },
  { title: "6º Torneio de Poker - Ano 2020/2021", champion: "LEONEL TSUGE", viceChampion: "MASSAYOSHI TSUGE", photoUrl: "" },
  { title: "7º Torneio de Poker - Ano 2021/2022", champion: "FELIPE SANTANA", viceChampion: "LEONARDO TSUGE", photoUrl: "" },
  { title: "8º Torneio de Poker - Ano 2022/2023", champion: "GUILHERME TSUGE", viceChampion: "THIAGO TSUGE", photoUrl: "fotos/2022-2023.jpg" },
  { title: "9º Torneio de Poker - Ano 2023/2024", champion: "RAONI SHIRAISHI", viceChampion: "MASSAYOSHI TSUGE", photoUrl: "" },
  { title: "10º Torneio de Poker - Ano 2024/2025", champion: "FERNANDO SHIRAISHI", viceChampion: "THIAGO TSUGE", photoUrl: "" },
  { title: "11º Torneio de Poker - Ano 2025/2026", champion: "FELIPE SANTANA", viceChampion: "LEONEL TSUGE", photoUrl: "fotos/2025-2026.jpg" },
  { title: "12º Torneio de Poker - Ano 2026/2027", champion: "...", viceChampion: "...", photoUrl: "" },
  { title: "13º Torneio de Poker - Ano 2027/2028", champion: "...", viceChampion: "...", photoUrl: "" },
  { title: "14º Torneio de Poker - Ano 2028/2029", champion: "...", viceChampion: "...", photoUrl: "" },
  { title: "15º Torneio de Poker - Ano 2029/2030", champion: "...", viceChampion: "...", photoUrl: "" },
  { title: "16º Torneio de Poker - Ano 2030/2031", champion: "...", viceChampion: "...", photoUrl: "" },
  { title: "17º Torneio de Poker - Ano 2031/2032", champion: "...", viceChampion: "...", photoUrl: "" },
  { title: "18º Torneio de Poker - Ano 2032/2033", champion: "...", viceChampion: "...", photoUrl: "" },
  { title: "19º Torneio de Poker - Ano 2033/2034", champion: "...", viceChampion: "...", photoUrl: "" },
  { title: "20º Torneio de Poker - Ano 2034/2035", champion: "...", viceChampion: "...", photoUrl: "" },
];
let clockInterval = null;
let history = [];
let historyRecords = [];

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);
    (state.players || []).forEach((p) => {
      if (!Array.isArray(p.rebuyEvents)) p.rebuyEvents = [];
      if (!Array.isArray(p.addonEvents)) p.addonEvents = [];
    });
    if (!Array.isArray(state.transferEvents)) state.transferEvents = [];
    if (state.tournamentStartEvent && typeof state.tournamentStartEvent !== "object") state.tournamentStartEvent = null;
    if (state.finalTableEvent && typeof state.finalTableEvent !== "object") state.finalTableEvent = null;
    if (state.championEvent && typeof state.championEvent !== "object") state.championEvent = null;
    if (state.tournamentEndEvent && typeof state.tournamentEndEvent !== "object") state.tournamentEndEvent = null;
  } catch (error) {
    console.warn("Nao foi possivel carregar o estado salvo.");
  }
}

function loadHistory() {
  const saved = localStorage.getItem(HISTORY_KEY);
  if (!saved) return;
  try {
    history = JSON.parse(saved) || [];
  } catch (error) {
    history = [];
  }
}

function saveHistory() {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function loadHistoryRecords() {
  const saved = localStorage.getItem(HISTORY_TOURNAMENTS_KEY);
  if (!saved) return;
  try {
    historyRecords = JSON.parse(saved) || [];
  } catch (error) {
    historyRecords = [];
  }
}

function saveHistoryRecords() {
  localStorage.setItem(HISTORY_TOURNAMENTS_KEY, JSON.stringify(historyRecords));
}

function setStarted(value) {
  state.started = value;
  updateHomeView();
  saveState();
}

function updateHomeView() {
  if (!elements.startScreen || !elements.dashboardScreen) return;
  elements.startScreen.style.display = state.started ? "none" : "grid";
  elements.dashboardScreen.style.display = state.started ? "grid" : "none";
  if (elements.navButtonsContainer) {
    elements.navButtonsContainer.classList.toggle("hidden", !state.started);
  }
  updateStartTournamentButton();
}

function updateStartTournamentButton() {
  const validated = !!state.tableAssignmentEvent;
  if (elements.startTournament) elements.startTournament.disabled = validated;
  if (elements.openDisplay) elements.openDisplay.disabled = !validated;
}

function exportConfig() {
  const payload = {
    tournamentName: state.tournamentName,
    levels: state.levels,
    buyinValue: state.buyinValue,
    buyinChips: state.buyinChips,
    rebuyValue: state.rebuyValue,
    rebuyChips: state.rebuyChips,
    addonValue: state.addonValue,
    addonChips: state.addonChips,
    rebuyLimit: state.rebuyLimit,
    addonLimit: state.addonLimit,
    chipValues: state.chipValues,
    tablesCount: state.tablesCount,
    prizeWinners: state.prizeWinners,
    prizeSplits: state.prizeSplits,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  link.href = url;
  link.download = `configuracoes-torneio-${timestamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportPlayers() {
  const payload = {
    names: state.players
      .map((player) => String(player.name || "").trim())
      .filter((name) => name.length > 0),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  link.href = url;
  link.download = `participantes-${timestamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getNextLevel() {
  if (!state.levels.length) return null;
  const nextIndex = Math.min(state.currentLevelIndex + 1, state.levels.length - 1);
  if (nextIndex === state.currentLevelIndex) return null;
  return state.levels[nextIndex];
}

function openDisplayWindow() {
  const displayWindow = window.open("", "pokerDisplay", "width=1100,height=650");
  if (!displayWindow) return;

  const html = `<!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Poker Fazenda - Relogio</title>
      <style>
        body {
          margin: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: #0c1f3b;
          color: #f2f2f2;
          height: 100vh;
          overflow: hidden;
        }
        .board {
          display: grid;
          grid-template-columns: 260px 1fr 260px;
          gap: 16px;
          padding: 20px;
          height: 100vh;
          box-sizing: border-box;
        }
        .panel {
          background: #10274d;
          border-radius: 10px;
          padding: 12px;
          display: grid;
          gap: 10px;
          align-content: start;
          height: 100%;
        }
        .center {
          text-align: center;
          display: grid;
          gap: 16px;
          grid-template-rows: auto 1fr auto;
          align-content: center;
          justify-items: center;
        }
        .title {
          font-size: clamp(22px, 2.4vw, 36px);
          font-weight: 800;
        }
        .subtitle {
          font-size: 12px;
          color: #c9d7f2;
        }
        .main-block {
          width: 100%;
          max-width: 80vw;
          display: grid;
          gap: 10px;
          justify-items: center;
        }
        .timer {
          font-size: clamp(160px, 20vw, 320px);
          font-weight: 800;
          letter-spacing: 2px;
        }
        .timer.timer-urgent {
          animation: timer-blink 1s ease-in-out infinite;
        }
        @keyframes timer-blink {
          0%, 100% { opacity: 1; color: #f2f2f2; }
          50% { opacity: 1; color: #ff4444; text-shadow: 0 0 20px #ff4444, 0 0 40px #ff6666; }
        }
        .section-line {
          width: 100%;
          height: 3px;
          background: #ffffff;
          border-radius: 999px;
        }
        .blinds-label {
          font-size: clamp(42px, 1.6vw, 42px);
          color: #c9d7f2;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .blinds {
          font-size: clamp(48px, 7vw, 96px);
          font-weight: 700;
        }
        .next-block {
          margin: 2px 0;
        }
        .next {
          font-size: clamp(16px, 2vw, 24px);
          color: #c9d7f2;
        }
        .stat {
          display: grid;
          gap: 2px;
          text-align: center;
        }
        .stat strong {
          font-size: clamp(18px, 2.2vw, 28px);
        }
        .stat span {
          font-size: clamp(14px, 1.8vw, 20px);
          color: #c9d7f2;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .controls {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }
        .chip-list {
          display: grid;
          gap: 8px;
          text-align: center;
          font-weight: 700;
          margin-top: -6px;
        }
        .chip-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-size: clamp(12px, 1.4vw, 18px);
        }
        .chip-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .chip-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid #f2f2f2;
        }
        .chip-black { background: #101010; }
        .chip-white { background: #f2f2f2; border-color: #0c1f3b; }
        .chip-green { background: #1c8b4c; }
        .chip-blue { background: #1d4ed8; }
        .chip-red { background: #c43a3a; }
        .btn {
          border: none;
          border-radius: 8px;
          padding: 4px 10px;
          font-weight: 700;
          cursor: pointer;
          font-size: 11px;
        }
        .btn.primary {
          background: #ffcc33 !important;
          color: #111 !important;
        }
        .btn.secondary {
          background: #2f364a !important;
          color: #f2f2f2 !important;
        }
        .btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
        .btn.danger {
          background: #c43a3a;
          color: #fff;
        }
        .right-panel {
          display: grid;
          gap: 8px;
          align-content: start;
        }
        .table-chip-list {
          display: grid;
          gap: 30px;
          font-size: 28px;
          text-align: left;
          margin-top: 30px;
        }
        .table-chip-item {
          display: grid;
          gap: 4px;
        }
        .table-chip-row {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }
        .prize-list {
          display: grid;
          gap: 6px;
        }
        .prize-item {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          font-size: 28px;
        }
      </style>
    </head>
    <body>
      <div class="board">
                  <div class="panel">
                    <div class="stat"><span>RODADA</span><strong id="dLevel">-</strong></div>
                    <div class="stat"><span>Participantes</span><strong id="dPlayers">0</strong></div>
                    <div class="stat"><span>Eliminados</span><strong id="dEliminated">0</strong></div>
                    <div class="stat"><span>Rebuy</span><strong id="dRebuys">0</strong></div>
                    <div class="stat"><span>Add-on</span><strong id="dAddons">0</strong></div>
                    <div class="stat"><span>Total de fichas</span><strong id="dTotalChips">0</strong></div>
                    <div class="table-chip-list" id="dTableChips"></div>
                  </div>
        <div class="panel center">
          <div>
            <div class="title" id="dTitle">Poker Fazenda</div>
            <div class="subtitle" id="dSubtitle">Torneio em andamento</div>
          </div>
          <div class="main-block">
            <div class="section-line"></div>
            <div class="timer" id="dTime">00:00</div>
            <div class="section-line"></div>
            <div>
              <div class="blinds-label">Small/Big Blind</div>
              <div class="blinds" id="dBlinds">-</div>
            </div>
            <div class="section-line"></div>
            <div class="next-block"><div class="next" id="dNext">Próximo: -</div></div>
            <div class="section-line"></div>
            <div class="controls">
              <button type="button" id="dStart" class="btn primary" data-command="start">Iniciar</button>
              <button type="button" id="dPause" class="btn secondary" data-command="pause" disabled>Pausar</button>
              <button type="button" id="dContinue" class="btn secondary" data-command="continue" disabled>Continuar</button>
              <button class="btn secondary" data-command="edit">Editar cronometro</button>
              <button class="btn secondary" data-command="restart">Reiniciar Rodada</button>
              <button class="btn secondary" data-command="prev">Rodada Anterior</button>
              <button class="btn secondary" data-command="next">Proxima Rodada</button>
              <button class="btn danger" data-command="reset">Reset</button>
            </div>
          </div>
        </div>
        <div class="panel right-panel">
          <div class="stat"><span>Inicio do torneio</span><strong id="dStartTime">--:--</strong></div>
          <div class="section-line"></div>
          <div class="stat"><span>Tempo decorrido</span><strong id="dElapsed">00:00:00</strong></div>
          <div class="section-line"></div>
          <div class="stat"><span>Valor das fichas</span></div>
          <div class="chip-list" id="dChips"></div>
          <div class="section-line"></div>
          <div class="stat"><span>Total premiacao</span><strong id="dPrizeTotal">R$ 0,00</strong></div>
          <div class="prize-list" id="dPrizeList"></div>
        </div>
      </div>
      <script>
        const STORAGE_KEY = "${STORAGE_KEY}";
        const COMMAND_KEY = "${COMMAND_KEY}";
        function formatTime(seconds) {
          const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
          const secs = String(seconds % 60).padStart(2, "0");
          return \`\${mins}:\${secs}\`;
        }
        function formatNumber(value) {
          const numberValue = Number(value || 0);
          return numberValue.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
        }
        function formatCurrency(value) {
          return \`R$ \${formatNumber(value)}\`;
        }
        function formatElapsed(seconds) {
          const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
          const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
          const secs = String(seconds % 60).padStart(2, "0");
          return \`\${hrs}:\${mins}:\${secs}\`;
        }
        function formatStart(ts) {
          if (!ts) return "--:--";
          const date = new Date(ts);
          return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
        }
        function update() {
          const saved = localStorage.getItem(STORAGE_KEY);
          if (!saved) return;
          const state = JSON.parse(saved);
          const level = state.levels[state.currentLevelIndex];
          const nextLevel = state.levels[state.currentLevelIndex + 1];
          document.getElementById("dLevel").textContent = level ? (level.isBreak ? "Intervalo" : state.currentLevelIndex + 1) : "-";
          const activePlayers = state.players.filter((p) => !p.eliminated).length;
          const eliminatedPlayers = state.players.filter((p) => p.eliminated).length;
          document.getElementById("dPlayers").textContent = activePlayers;
          document.getElementById("dEliminated").textContent = eliminatedPlayers;
          const paid = state.players.filter((p) => p.paid).length;
          const rebuys = state.players.reduce((sum, p) => sum + p.rebuys, 0);
          const addons = state.players.reduce((sum, p) => sum + p.addons, 0);
          document.getElementById("dRebuys").textContent = rebuys;
          document.getElementById("dAddons").textContent = addons;
          const totalChips =
            (state.buyinChips * paid) + (state.rebuyChips * rebuys) + (state.addonChips * addons);
          document.getElementById("dTotalChips").textContent = formatNumber(totalChips);
          const tableCounts = new Map();
          state.players.forEach((player) => {
            if (!player.tableNumber) return;
            if (!tableCounts.has(player.tableNumber)) {
              tableCounts.set(player.tableNumber, { paid: 0, rebuys: 0, addons: 0 });
            }
            const entry = tableCounts.get(player.tableNumber);
            if (player.paid) entry.paid += 1;
            entry.rebuys += Number(player.rebuys || 0);
            entry.addons += Number(player.addons || 0);
          });
          const tableList = document.getElementById("dTableChips");
          if (tableCounts.size === 0) {
            tableList.innerHTML = "";
          } else {
            const sortedTables = Array.from(tableCounts.entries()).sort((a, b) => a[0] - b[0]);
            const adjustments = state.tableChipAdjustments || {};
            tableList.innerHTML = sortedTables.map(([tableNumber, counts]) => {
              const base =
                (state.buyinChips * counts.paid)
                + (state.rebuyChips * counts.rebuys)
                + (state.addonChips * counts.addons);
              const extra = Number(adjustments[tableNumber] || 0);
              const chips = Math.max(0, base + extra);
              const participants = state.players.filter(
                (player) => Number(player.tableNumber) === Number(tableNumber) && !player.eliminated
              ).length;
              if (chips === 0 && participants === 0) return "";
              const mesaLabel = Number(tableNumber) === 99
                ? "Mesa Final"
                : \`Mesa \${String(tableNumber).padStart(2, "0")}\`;
              return \`
                <div class="table-chip-item">
                  <strong>\${mesaLabel}</strong>
                  \${Number(tableNumber) === 99
                    ? \`<div class="table-chip-row">
                        <span>Participantes</span>
                        <span>\${participants}</span>
                      </div>\`
                    : \`<div class="table-chip-row">
                        <span>Fichas</span>
                        <span>\${formatNumber(chips)}</span>
                      </div>
                      <div class="table-chip-row">
                        <span>Participantes</span>
                        <span>\${participants}</span>
                      </div>\`}
                </div>
              \`;
            }).filter(Boolean).join("");
          }
          document.getElementById("dTitle").textContent = state.tournamentName || "Poker Fazenda";
          const displaySecondsRemaining = state.clockRunning && state.levelEndTs
            ? Math.max(0, Math.ceil((state.levelEndTs - Date.now()) / 1000))
            : state.secondsRemaining;
          const dTimeEl = document.getElementById("dTime");
          dTimeEl.textContent = formatTime(displaySecondsRemaining);
          dTimeEl.className = "timer" + (state.clockRunning && displaySecondsRemaining <= 10 && displaySecondsRemaining > 0 ? " timer-urgent" : "");
          if (state.clockRunning && displaySecondsRemaining <= 10 && displaySecondsRemaining >= 1 && displaySecondsRemaining !== window._lastUrgentBeepSecond) {
            window._lastUrgentBeepSecond = displaySecondsRemaining;
            try {
              const ctx = new (window.AudioContext || window.webkitAudioContext)();
              const osc = ctx.createOscillator();
              osc.frequency.value = 800;
              osc.type = "sine";
              const gain = ctx.createGain();
              gain.gain.setValueAtTime(0.25, ctx.currentTime);
              gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.start(ctx.currentTime);
              osc.stop(ctx.currentTime + 0.12);
            } catch (e) {}
          }
          if (displaySecondsRemaining > 10) window._lastUrgentBeepSecond = null;
          document.getElementById("dBlinds").textContent = level
            ? (level.isBreak ? "Pausa" : \`\${formatNumber(level.small)} / \${formatNumber(level.big)}\`)
            : "-";
          document.getElementById("dNext").textContent = nextLevel
            ? \`Próximo: \${nextLevel.isBreak ? "Intervalo" : \`\${formatNumber(nextLevel.small)} / \${formatNumber(nextLevel.big)}\`}\`
            : "Próximo: -";
          const startTs = state.tournamentStartTs;
          const elapsedBase = Number(state.elapsedSeconds || 0);
          const runningExtra = state.clockRunning && state.lastStartTs
            ? Math.floor((Date.now() - state.lastStartTs) / 1000)
            : 0;
          const elapsed = elapsedBase + runningExtra;
          document.getElementById("dStartTime").textContent = formatStart(startTs);
          document.getElementById("dElapsed").textContent = formatElapsed(elapsed);
          const chipValues = Array.isArray(state.chipValues) ? state.chipValues : [];
          const chipLabels = [
            { label: "PRETA", className: "chip-black" },
            { label: "BRANCA", className: "chip-white" },
            { label: "VERDE", className: "chip-green" },
            { label: "AZUL", className: "chip-blue" },
            { label: "VERMELHA", className: "chip-red" },
          ];
          const chipContainer = document.getElementById("dChips");
          chipContainer.innerHTML = "";
          if (chipValues.length === 0) {
            chipContainer.textContent = "-";
          } else {
            chipLabels.forEach((chip, index) => {
              const value = chipValues[index] ?? 0;
              const row = document.createElement("div");
              row.className = "chip-item";
              row.innerHTML = \`
                <div class="chip-left">
                  <span class="chip-dot \${chip.className}"></span>
                  <span>\${chip.label}</span>
                </div>
                <span>\${formatCurrency(value)}</span>
              \`;
              chipContainer.appendChild(row);
            });
          }
          const totalCollected = (state.buyinValue * paid)
            + (state.rebuyValue * rebuys)
            + (state.addonValue * addons);
          const savedExpenses = Array.isArray(state.expenses)
            ? state.expenses.filter((expense) => expense.saved !== false)
            : [];
          const totalExpenses = savedExpenses.reduce((sum, expense) => sum + Number(expense.value || 0), 0);
          const netPrize = Math.max(0, totalCollected - totalExpenses);
          document.getElementById("dPrizeTotal").textContent = formatCurrency(netPrize);
          const prizeList = Array.isArray(state.prizeAmounts) ? state.prizeAmounts : [];
          const prizeSaved = Boolean(state.prizeSaved);
          document.getElementById("dPrizeList").innerHTML = prizeSaved
            ? prizeList.map((amount, index) => \`
              <div class="prize-item">
                <span>\${index + 1}º</span>
                <span>\${formatCurrency(amount || 0)}</span>
              </div>
            \`).join("")
            : \`<span class="muted">Sem premiacao salva.</span>\`;
          const dStartEl = document.getElementById("dStart");
          const dPauseEl = document.getElementById("dPause");
          const dContinueEl = document.getElementById("dContinue");
          if (dStartEl) {
            dStartEl.disabled = state.clockRunning || !!state.tournamentStartTs;
          }
          if (dPauseEl) {
            dPauseEl.disabled = !state.clockRunning;
            dPauseEl.classList.remove("primary", "secondary");
            dPauseEl.classList.add(state.clockRunning ? "primary" : "secondary");
          }
          if (dContinueEl) {
            dContinueEl.disabled = state.clockRunning || !state.tournamentStartTs;
          }
        }
        function parseTimeString(value) {
          const match = value.trim().match(/^(\\d{1,3}):([0-5]\\d)$/);
          if (!match) return null;
          const minutes = Number(match[1]);
          const seconds = Number(match[2]);
          return minutes * 60 + seconds;
        }
        function sendCommand(command, value) {
          localStorage.setItem(COMMAND_KEY, JSON.stringify({ command, value, ts: Date.now() }));
        }
        function dispatchCommand(command, value) {
          try {
            if (window.opener && typeof window.opener.handleCommand === "function") {
              window.opener.handleCommand(value != null ? { command, value } : { command });
              return true;
            }
          } catch (e) {}
          sendCommand(command, value);
          return false;
        }
        document.querySelectorAll("[data-command]").forEach((button) => {
          button.addEventListener("click", () => {
            const command = button.dataset.command;
            if (command === "reset") {
              const confirmed = window.confirm("voce tem certeza? isso ira reiniciar o torneio");
              if (!confirmed) return;
            }
            if (command === "edit") {
              const input = window.prompt("Novo tempo (mm:ss)", "00:00");
              if (!input) return;
              const parsed = parseTimeString(input);
              if (parsed === null) {
                window.alert("Formato invalido. Use mm:ss, por exemplo 05:30.");
                return;
              }
              dispatchCommand(command, parsed);
              setTimeout(update, 80);
              return;
            }
            dispatchCommand(command);
            setTimeout(update, 80);
          });
        });
        update();
        setInterval(update, 1000);
        window.addEventListener("storage", update);
      </script>
    </body>
  </html>`;

  displayWindow.document.open();
  displayWindow.document.write(html);
  displayWindow.document.close();
}

function handleCommand(payload) {
  const command = typeof payload === "string" ? payload : payload.command;
  if (command === "start") startClock();
  if (command === "pause") pauseClock();
  if (command === "continue") startClock();
  if (command === "prev") setLevel(state.currentLevelIndex - 1);
  if (command === "next") setLevel(state.currentLevelIndex + 1);
  if (command === "reset") resetTournamentClock();
  if (command === "restart") restartLevel();
  if (command === "edit") {
    const value = Number(payload.value);
    if (!Number.isNaN(value) && value >= 0) {
      state.secondsRemaining = value;
      if (state.clockRunning) {
        state.levelEndTs = Date.now() + value * 1000;
      }
      updateClockDisplay();
      saveState();
    }
  }
}

function resetTournamentData() {
  pauseClock();
  state.tournamentName = "";
  state.levels = [];
  state.currentLevelIndex = 0;
  state.secondsRemaining = 0;
  state.clockRunning = false;
  state.buyinValue = 0;
  state.buyinChips = 0;
  state.rebuyValue = 0;
  state.rebuyChips = 0;
  state.addonValue = 0;
  state.addonChips = 0;
  state.rebuyLimit = 0;
  state.addonLimit = 0;
  state.players = [];
  state.tableChipAdjustments = {};
  state.chipValues = [100, 500, 1000, 5000, 10000];
  state.tournamentStartTs = null;
  state.elapsedSeconds = 0;
  state.lastStartTs = null;
  state.levelEndTs = null;
  state.tableAssignmentEvent = null;
  state.transferEvents = [];
  state.tournamentStartEvent = null;
  state.finalTableEvent = null;
  state.championEvent = null;
  state.tournamentEndEvent = null;
}

function applyConfigData(data) {
  state.tournamentName = data.tournamentName || "";
  state.levels = Array.isArray(data.levels)
    ? data.levels.map((level) => ({
        small: Number(level.small || 0),
        big: Number(level.big || 0),
        duration: Number(level.duration || 0),
        isBreak: Boolean(level.isBreak),
      }))
    : [];
  state.currentLevelIndex = 0;
  state.secondsRemaining = state.levels[0]?.duration ? state.levels[0].duration * 60 : 0;
  state.clockRunning = false;
  state.buyinValue = Number(data.buyinValue || 0);
  state.buyinChips = Number(data.buyinChips || 0);
  state.rebuyValue = Number(data.rebuyValue || 0);
  state.rebuyChips = Number(data.rebuyChips || 0);
  state.addonValue = Number(data.addonValue || 0);
  state.addonChips = Number(data.addonChips || 0);
  state.rebuyLimit = Number(data.rebuyLimit || 0);
  state.addonLimit = Number(data.addonLimit || 0);
  state.tablesCount = Math.max(1, Math.min(3, Number(data.tablesCount || 1)));
  state.tableChipAdjustments = {};
  state.chipValues = Array.isArray(data.chipValues)
    ? data.chipValues.map((value) => Number(value || 0))
    : [100, 500, 1000, 5000, 10000];
  state.prizeWinners = Math.max(0, Number(data.prizeWinners || 0));
  state.prizeSplits = Array.isArray(data.prizeSplits)
    ? data.prizeSplits.map((value) => Number(value || 0))
    : [];
  state.prizeAmounts = [];
  state.prizeSaved = false;
  state.expenses = [];
  state.tournamentStartTs = null;
  state.elapsedSeconds = 0;
  state.lastStartTs = null;
  state.levelEndTs = null;
  state.players = [];
  state.tableAssignmentEvent = null;
  state.transferEvents = [];
  state.tournamentStartEvent = null;
  state.finalTableEvent = null;
  state.championEvent = null;
  state.tournamentEndEvent = null;
  initializeFormValues();
  renderLevels();
  renderPlayers();
  renderRebuyList();
  renderEvents();
  updateSummary();
  updateClockDisplay();
  saveState();
}

function getYearFromDate(value) {
  if (!value) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value.slice(0, 4);
  const match = value.match(/(\d{4})$/);
  return match ? match[1] : "";
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim() !== "");
  if (lines.length === 0) return [];
  const rows = lines.map((line) => line.split(";").map((cell) => cell.trim().replace(/^"|"$/g, "")));
  const header = rows[0].map((cell) => cell.toLowerCase());
  const hasHeader = header.includes("data") && header.includes("campeao");
  const dataRows = hasHeader ? rows.slice(1) : rows;
  return dataRows.map((cols) => {
    if (hasHeader) {
      const get = (key) => {
        const idx = header.indexOf(key);
        return idx >= 0 ? cols[idx] : "";
      };
      return {
        title: get("titulo"),
        date: get("data"),
        champion: get("campeao"),
        participants: Number(get("participantes") || 0),
        rebuys: Number(get("rebuys") || 0),
        addons: Number(get("addons") || 0),
        values: get("valores"),
        placement: get("classificacao"),
      };
    }
    return {
      title: cols[0] || "",
      date: cols[1] || "",
      champion: cols[2] || "",
      participants: Number(cols[3] || 0),
      rebuys: Number(cols[4] || 0),
      addons: Number(cols[5] || 0),
      values: cols[6] || "",
      placement: cols[7] || "",
    };
  });
}

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

/** Captura o contexto atual do torneio (mesa, rodada, tempo) para registrar eventos de rebuy/addon. */
function captureEventContext(player) {
  if (typeof computeSecondsRemainingFromClock === "function") computeSecondsRemainingFromClock();
  const level = state.levels[state.currentLevelIndex];
  const levelDuration = level ? level.duration : 0;
  const secondsRemaining = typeof state.secondsRemaining === "number" ? state.secondsRemaining : 0;
  return {
    tableNumber: player ? player.tableNumber : null,
    level: state.currentLevelIndex + 1,
    levelDuration,
    secondsRemaining,
    timestamp: Date.now(),
  };
}

function parseTimeString(value) {
  const match = value.trim().match(/^(\d{1,3}):([0-5]\d)$/);
  if (!match) return null;
  const minutes = Number(match[1]);
  const seconds = Number(match[2]);
  return minutes * 60 + seconds;
}

function formatNumber(value) {
  const numberValue = Number(value || 0);
  return numberValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatInteger(value) {
  const numberValue = Math.floor(Number(value || 0));
  return numberValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function sanitizeIntegerInput(value) {
  return String(value || "").replace(/[^\d]/g, "");
}

function parseNumber(value) {
  if (!value) return 0;
  const normalized = value.replace(/\./g, "").replace(",", ".");
  const parsed = Number(normalized);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function roundToNearestTen(value) {
  return Math.round(Number(value || 0) / 10) * 10;
}

function getTableBaseChips(tableNumber) {
  const playersInTable = state.players.filter(
    (player) => Number(player.tableNumber) === Number(tableNumber)
  );
  const paid = playersInTable.filter((player) => player.paid).length;
  const rebuys = playersInTable.reduce((sum, player) => sum + Number(player.rebuys || 0), 0);
  const addons = playersInTable.reduce((sum, player) => sum + Number(player.addons || 0), 0);
  return (state.buyinChips * paid) + (state.rebuyChips * rebuys) + (state.addonChips * addons);
}

function getPlayerBaseChips(player) {
  const paid = player.paid ? 1 : 0;
  const rebuys = Number(player.rebuys || 0);
  const addons = Number(player.addons || 0);
  return (state.buyinChips * paid) + (state.rebuyChips * rebuys) + (state.addonChips * addons);
}

function formatTableLabel(tableNumber) {
  if (!tableNumber) return "-";
  const numeric = Number(tableNumber);
  if (numeric === 99) return "Mesa Final";
  return `Mesa ${String(numeric).padStart(2, "0")}`;
}

function computePrizeAmounts(net, splits) {
  const rawAmounts = splits.map((percent) => {
    const raw = (net * Number(percent || 0)) / 100;
    return roundToNearestTen(raw);
  });
  let adjusted = [...rawAmounts];
  const sumAmounts = () => adjusted.reduce((sum, value) => sum + Number(value || 0), 0);
  while (sumAmounts() > net) {
    for (let index = adjusted.length - 1; index >= 0; index -= 1) {
      if (adjusted[index] >= 10) {
        adjusted[index] -= 10;
        if (sumAmounts() <= net) break;
      }
    }
    if (adjusted.every((value) => value === 0)) break;
  }
  return adjusted;
}

function formatCurrency(value) {
  return `R$ ${formatNumber(value)}`;
}

function formatCsvValue(value) {
  const text = String(value ?? "");
  if (text.includes(";") || text.includes("\n") || text.includes('"')) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function getSnapshot() {
  const paidCount = state.players.filter((player) => player.paid).length;
  const totalRebuys = state.players.reduce((sum, player) => sum + player.rebuys, 0);
  const totalAddons = state.players.reduce((sum, player) => sum + player.addons, 0);
  const levelsText = state.levels
    .map((level) => {
      if (level.isBreak) return `Intervalo/${level.duration}m`;
      return `${formatNumber(level.small)}-${formatNumber(level.big)}/${level.duration}m`;
    })
    .join(" | ");
  const playersText = state.players
    .map((player) => {
      const status = player.paid ? "pago" : "pendente";
      return `${player.name}(${status},R:${player.rebuys},A:${player.addons})`;
    })
    .join(" | ");

  return {
    timestamp: new Date().toISOString(),
    tournamentName: state.tournamentName,
    buyinValue: formatNumber(state.buyinValue),
    buyinChips: formatNumber(state.buyinChips),
    rebuyValue: formatNumber(state.rebuyValue),
    rebuyChips: formatNumber(state.rebuyChips),
    addonValue: formatNumber(state.addonValue),
    addonChips: formatNumber(state.addonChips),
    rebuyLimit: formatInteger(state.rebuyLimit),
    addonLimit: formatInteger(state.addonLimit),
    totalPlayers: state.players.length,
    paidPlayers: paidCount,
    totalRebuys,
    totalAddons,
    levelsText,
    playersText,
  };
}

function addHistorySnapshot() {
  history.push(getSnapshot());
  saveHistory();
}

function exportHistoryCsv() {
  if (history.length === 0) {
    addHistorySnapshot();
  }

  const header = [
    "data",
    "torneio",
    "buyin_rs",
    "buyin_fichas",
    "rebuy_rs",
    "rebuy_fichas",
    "addon_rs",
    "addon_fichas",
    "limite_rebuy",
    "limite_addon",
    "participantes",
    "pagos",
    "total_rebuys",
    "total_addons",
    "niveis",
    "participantes_detalhe",
  ];

  const rows = history.map((entry) => [
    entry.timestamp,
    entry.tournamentName,
    entry.buyinValue,
    entry.buyinChips,
    entry.rebuyValue,
    entry.rebuyChips,
    entry.addonValue,
    entry.addonChips,
    entry.rebuyLimit,
    entry.addonLimit,
    entry.totalPlayers,
    entry.paidPlayers,
    entry.totalRebuys,
    entry.totalAddons,
    entry.levelsText,
    entry.playersText,
  ]);

  const csvContent = [header, ...rows]
    .map((row) => row.map(formatCsvValue).join(";"))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  link.href = url;
  link.download = `historico-poker-fazenda-${timestamp}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function playUrgentBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.frequency.value = 800;
    osc.type = "sine";
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.12);
  } catch (e) {}
}

function computeSecondsRemainingFromClock() {
  if (!state.clockRunning || !state.levelEndTs) return state.secondsRemaining;
  const remaining = Math.max(0, Math.ceil((state.levelEndTs - Date.now()) / 1000));
  state.secondsRemaining = remaining;
  return remaining;
}

/** Aplica comando recebido do celular (via Google Apps Script). */
function applyRemoteCommand(cmd) {
  const player = state.players.find((p) => p.id === cmd.playerId);
  if (!player) return false;
  const isEliminated = Boolean(player.eliminated);
  if (typeof computeSecondsRemainingFromClock === "function") computeSecondsRemainingFromClock();
  const level = state.levels[state.currentLevelIndex];
  const levelDuration = level ? level.duration : 0;
  const secondsRemaining = typeof state.secondsRemaining === "number" ? state.secondsRemaining : 0;

  if (cmd.action === "rebuy-add" && !isEliminated) {
    if (state.rebuyLimit <= 0 || player.rebuys < state.rebuyLimit) {
      player.rebuys += 1;
      (player.rebuyEvents = player.rebuyEvents || []).push({ ...captureEventContext(player), playerName: player.name, playerId: player.id });
      return true;
    }
  }
  if (cmd.action === "rebuy-remove") {
    if (player.rebuys > 0) {
      player.rebuys -= 1;
      if (Array.isArray(player.rebuyEvents) && player.rebuyEvents.length > 0) player.rebuyEvents.pop();
      return true;
    }
  }
  if (cmd.action === "addon-add" && !isEliminated) {
    if (state.addonLimit <= 0 || player.addons < state.addonLimit) {
      player.addons += 1;
      (player.addonEvents = player.addonEvents || []).push({ ...captureEventContext(player), playerName: player.name, playerId: player.id });
      return true;
    }
  }
  if (cmd.action === "addon-remove") {
    if (player.addons > 0) {
      player.addons -= 1;
      if (Array.isArray(player.addonEvents) && player.addonEvents.length > 0) player.addonEvents.pop();
      return true;
    }
  }
  if (cmd.action === "eliminate" && !isEliminated) {
    player.eliminated = true;
    player.eliminatedAt = Date.now();
    player.eliminatedLevel = state.currentLevelIndex + 1;
    player.eliminatedLevelDuration = levelDuration;
    player.eliminatedSecondsRemaining = secondsRemaining;
    const totalPlayers = state.players.length;
    const eliminatedCount = state.players.filter((p) => p.eliminated).length;
    player.eliminatedRank = totalPlayers - eliminatedCount + 1;
    if (eliminatedCount === totalPlayers - 1) {
      const champion = state.players.find((p) => !p.eliminated);
      if (champion) {
        champion.champion = true;
        const ts = Date.now();
        state.championEvent = { type: "champion", typeLabel: "Campeão", playerName: champion.name, level: state.currentLevelIndex + 1, levelDuration, secondsRemaining, timestamp: ts };
        state.tournamentEndEvent = { type: "tournament-end", typeLabel: "Encerramento do torneio", level: state.currentLevelIndex + 1, levelDuration, secondsRemaining, timestamp: ts };
        pauseClock();
      }
    }
    return true;
  }
  return false;
}

/** Envia estado ao Google Apps Script para o celular exibir. */
function pushStateToScript() {
  const url = localStorage.getItem(SCRIPT_URL_KEY);
  if (!url) return;
  try {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "state",
        players: state.players,
        tournamentName: state.tournamentName,
        rebuyLimit: state.rebuyLimit,
        addonLimit: state.addonLimit,
      }),
    }).catch(() => {});
  } catch (e) {}
}

/** Busca comandos do celular, aplica e limpa. */
async function fetchAndApplyCommands() {
  const url = localStorage.getItem(SCRIPT_URL_KEY);
  if (!url) return;
  const baseUrl = url.replace(/\?.*$/, "").replace(/\/$/, "");
  try {
    const res = await fetch(baseUrl + "?source=computer");
    const data = await res.json();
    const commands = data.commands || [];
    if (commands.length === 0) return;
    let applied = 0;
    for (const cmd of commands) {
      if (applyRemoteCommand(cmd)) applied += 1;
    }
    if (applied > 0) {
      renderPlayers();
      renderRebuyList();
      renderEvents();
      renderPayouts();
      updateSummary();
      saveState();
    }
    await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "clear" }),
    }).catch(() => {});
  } catch (e) {}
}

let syncIntervalId = null;
function startSyncLoop() {
  if (syncIntervalId) clearInterval(syncIntervalId);
  const url = localStorage.getItem(SCRIPT_URL_KEY);
  if (!url) return;
  pushStateToScript();
  syncIntervalId = setInterval(() => {
    fetchAndApplyCommands();
    pushStateToScript();
  }, 4000);
}

function formatStartTime(ts) {
  if (!ts) return "--:--";
  return new Date(ts).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function updateClockDisplay() {
  computeSecondsRemainingFromClock();
  if (elements.clockStartTime) {
    elements.clockStartTime.textContent = formatStartTime(state.tournamentStartTs);
  }
  const level = state.levels[state.currentLevelIndex];
  if (!level) {
    elements.clockLevel.textContent = "-";
    elements.clockBlinds.textContent = "-";
    elements.clockTime.textContent = formatTime(0);
    if (elements.clockTime && elements.clockTime.parentElement) {
      elements.clockTime.parentElement.classList.remove("clock-urgent");
    }
    return;
  }
  const isUrgent = state.clockRunning && state.secondsRemaining <= 10 && state.secondsRemaining > 0;
  if (elements.clockTime && elements.clockTime.parentElement) {
    elements.clockTime.parentElement.classList.toggle("clock-urgent", isUrgent);
  }
  elements.clockLevel.textContent = level.isBreak ? "Intervalo" : String(state.currentLevelIndex + 1);
  elements.clockBlinds.textContent = level.isBreak
    ? "Pausa"
    : `${formatNumber(level.small)} / ${formatNumber(level.big)}`;
  elements.clockTime.textContent = formatTime(state.secondsRemaining);
}

function setLevel(index) {
  if (state.levels.length === 0) return;
  const clampedIndex = Math.max(0, Math.min(index, state.levels.length - 1));
  state.currentLevelIndex = clampedIndex;
  state.secondsRemaining = state.levels[clampedIndex].duration * 60;
  if (state.clockRunning) {
    state.levelEndTs = Date.now() + state.secondsRemaining * 1000;
  }
  updateClockDisplay();
  saveState();
}

function restartLevel() {
  if (!state.levels.length) return;
  state.secondsRemaining = state.levels[state.currentLevelIndex].duration * 60;
  if (state.clockRunning) {
    state.levelEndTs = Date.now() + state.secondsRemaining * 1000;
  }
  updateClockDisplay();
  saveState();
}

function resetTournamentClock() {
  pauseClock();
  state.currentLevelIndex = 0;
  state.secondsRemaining = state.levels[0]?.duration ? state.levels[0].duration * 60 : 0;
  state.tournamentStartTs = null;
  state.elapsedSeconds = 0;
  state.lastStartTs = null;
  state.levelEndTs = null;
  updateClockDisplay();
  saveState();
}

function restartTournament() {
  const confirmed = window.confirm(
    "Reiniciar o torneio? O cronômetro, rodada, rebuys, add-ons, mesas e eventos serao zerados. Participantes e configuracoes serao mantidos."
  );
  if (!confirmed) return;
  pauseClock();
  state.currentLevelIndex = 0;
  state.secondsRemaining = state.levels[0]?.duration ? state.levels[0].duration * 60 : 0;
  state.tournamentStartTs = null;
  state.elapsedSeconds = 0;
  state.lastStartTs = null;
  state.levelEndTs = null;
  state.tableChipAdjustments = {};
  state.tableAssignmentEvent = null;
  state.transferEvents = [];
  state.tournamentStartEvent = null;
  state.finalTableEvent = null;
  state.championEvent = null;
  state.tournamentEndEvent = null;
  (state.players || []).forEach((player) => {
    player.rebuys = 0;
    player.addons = 0;
    player.rebuyEvents = [];
    player.addonEvents = [];
    player.eliminated = false;
    player.eliminatedAt = null;
    player.eliminatedLevel = null;
    player.eliminatedLevelDuration = null;
    player.eliminatedSecondsRemaining = null;
    player.eliminatedRank = null;
    player.champion = false;
    player.tableNumber = null;
    player.tableSeat = null;
  });
  renderLevels();
  renderPlayers();
  renderRebuyList();
  renderEvents();
  updateClockDisplay();
  updateSummary();
  updateStartTournamentButton();
  saveState();
  window.alert("Torneio reiniciado.");
}

function tickClock() {
  if (!state.clockRunning) return;
  state.secondsRemaining = Math.max(0, Math.ceil((state.levelEndTs - Date.now()) / 1000));
  if (state.secondsRemaining <= 10 && state.secondsRemaining > 0) {
    playUrgentBeep();
  }
  if (state.secondsRemaining <= 0) {
    if (state.currentLevelIndex < state.levels.length - 1) {
      setLevel(state.currentLevelIndex + 1);
    } else {
      pauseClock();
    }
  }
  updateClockDisplay();
  saveState();
}

function startClock() {
  if (state.clockRunning || state.levels.length === 0) return;
  state.clockRunning = true;
  if (!state.tournamentStartTs) {
    state.tournamentStartTs = Date.now();
    state.tournamentStartEvent = {
      type: "tournament-start",
      typeLabel: "Início do torneio",
      timestamp: state.tournamentStartTs,
    };
    renderEvents();
    updateClockDisplay();
  }
  state.lastStartTs = Date.now();
  state.levelEndTs = Date.now() + state.secondsRemaining * 1000;
  clockInterval = setInterval(tickClock, 1000);
  saveState();
}

function pauseClock() {
  state.clockRunning = false;
  if (state.levelEndTs) {
    state.secondsRemaining = Math.max(0, Math.ceil((state.levelEndTs - Date.now()) / 1000));
    state.levelEndTs = null;
  }
  if (state.lastStartTs) {
    state.elapsedSeconds += Math.floor((Date.now() - state.lastStartTs) / 1000);
    state.lastStartTs = null;
  }
  clearInterval(clockInterval);
  clockInterval = null;
  saveState();
}

function updateSummary() {
  elements.summaryTournament.textContent = state.tournamentName || "-";
  elements.summaryBuyin.textContent = formatCurrency(state.buyinValue);
  if (elements.summaryRebuy) elements.summaryRebuy.textContent = formatCurrency(state.rebuyValue);
  if (elements.summaryAddon) elements.summaryAddon.textContent = formatCurrency(state.addonValue);
  elements.summaryPlayers.textContent = String(state.players.length);
  const paidCount = state.players.filter((player) => player.paid).length;
  elements.summaryPaid.textContent = `${paidCount} pagos`;
}

function setValuesEditing(enabled) {
  state.valuesEditing = enabled;
  const fields = [
    elements.buyinValue,
    elements.buyinChips,
    elements.rebuyValue,
    elements.rebuyChips,
    elements.addonValue,
    elements.addonChips,
    elements.rebuyLimit,
    elements.addonLimit,
    elements.chipValue1,
    elements.chipValue2,
    elements.chipValue3,
    elements.chipValue4,
    elements.chipValue5,
  ];
  fields.forEach((field) => {
    if (field) field.disabled = !enabled;
  });
  if (elements.editValues) elements.editValues.disabled = enabled;
  if (elements.saveValues) elements.saveValues.disabled = !enabled;
  if (enabled && elements.buyinValue) elements.buyinValue.focus();
}

function saveValues() {
  state.buyinValue = parseNumber(elements.buyinValue.value);
  state.buyinChips = parseNumber(elements.buyinChips.value);
  state.rebuyValue = parseNumber(elements.rebuyValue.value);
  state.rebuyChips = parseNumber(elements.rebuyChips.value);
  state.addonValue = parseNumber(elements.addonValue.value);
  state.addonChips = parseNumber(elements.addonChips.value);
  state.rebuyLimit = Math.max(0, Math.floor(parseNumber(elements.rebuyLimit.value)));
  state.addonLimit = Math.max(0, Math.floor(parseNumber(elements.addonLimit.value)));
  state.chipValues = [
    parseNumber(elements.chipValue1.value),
    parseNumber(elements.chipValue2.value),
    parseNumber(elements.chipValue3.value),
    parseNumber(elements.chipValue4.value),
    parseNumber(elements.chipValue5.value),
  ];
  initializeFormValues();
  updateSummary();
  renderPayouts();
  saveState();
  setValuesEditing(false);
}

function renderLevels() {
  elements.levelsList.innerHTML = "";
  if (state.levels.length === 0) {
    elements.levelsList.innerHTML = `<span class="muted">Nenhuma rodada cadastrada.</span>`;
    return;
  }
  state.levels.forEach((level, index) => {
    const item = document.createElement("div");
    item.className = "row";
    const label = level.isBreak ? "Intervalo" : `Rodada ${index + 1}`;
    const blinds = level.isBreak ? "Pausa" : `${formatNumber(level.small)} / ${formatNumber(level.big)}`;
    const isBreakChecked = level.isBreak ? "checked" : "";
    const disableBlinds = level.isBreak ? "disabled" : "";
    item.innerHTML = `
      <div class="level-header">
        <strong>${label}</strong>
        <button data-action="use" data-index="${index}" class="secondary small">Ir para rodada</button>
      </div>
      <span class="badge">${blinds}</span>
      <div class="level-inline">
        <label class="inline-field">
          SB
          <input
            data-field="small"
            data-index="${index}"
            type="text"
            inputmode="decimal"
            value="${formatNumber(level.small)}"
            ${disableBlinds}
          />
        </label>
        <label class="inline-field">
          BB
          <input
            data-field="big"
            data-index="${index}"
            type="text"
            inputmode="decimal"
            value="${formatNumber(level.big)}"
            ${disableBlinds}
          />
        </label>
        <label class="inline-field">
          Duracao
          <input data-field="duration" data-index="${index}" type="number" min="1" value="${level.duration}" />
        </label>
        <label class="check inline-field">
          <input data-field="break" data-index="${index}" type="checkbox" ${isBreakChecked} />
          Intervalo
        </label>
      </div>
      <span class="muted">Duracao: ${level.duration} min</span>
      <div class="row-actions">
        <button data-action="update" data-index="${index}" class="secondary">Atualizar</button>
        <button data-action="remove" data-index="${index}" class="secondary">Remover</button>
      </div>
    `;
    elements.levelsList.appendChild(item);
  });
}

function renderPlayers() {
  if (elements.playersCount) {
    elements.playersCount.textContent = `(${state.players.length})`;
  }
  elements.playersList.innerHTML = "";
  if (state.players.length === 0) {
    elements.playersList.innerHTML = `<span class="muted">Nenhum participante cadastrado.</span>`;
    return;
  }
  const sortedPlayers = [...state.players].sort((a, b) =>
    a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
  );
  sortedPlayers.forEach((player) => {
    const item = document.createElement("div");
    item.className = "row rebuy-row";
    const statusClass = player.paid ? "paid" : "pending";
    const statusLabel = player.paid ? "Pago" : "Pendente";
    const rebuyLimit = Number(state.rebuyLimit);
    const addonLimit = Number(state.addonLimit);
    const isEliminated = Boolean(player.eliminated);
    const canRebuyAdd = !isEliminated && (rebuyLimit <= 0 || player.rebuys < rebuyLimit);
    const canAddonAdd = !isEliminated && (addonLimit <= 0 || player.addons < addonLimit);
    const canRebuyRemove = player.rebuys > 0;
    const canAddonRemove = player.addons > 0;
    const rebuyLimitText = rebuyLimit > 0 ? formatInteger(rebuyLimit) : "0";
    const addonLimitText = addonLimit > 0 ? formatInteger(addonLimit) : "0";
    const rebuyText = rebuyLimit > 0 ? `${player.rebuys} / ${rebuyLimitText}` : `${player.rebuys}`;
    const addonText = addonLimit > 0 ? `${player.addons} / ${addonLimitText}` : `${player.addons}`;
    const isEditing = state.editingPlayerId === player.id;
    const tableLabel = formatTableLabel(player.tableNumber);
    item.innerHTML = `
      ${
        isEditing
          ? `<div class="level-inline">
              <label class="inline-field">
                Nome
                <input data-field="player-name" data-id="${player.id}" type="text" value="${player.name}" />
              </label>
            </div>`
          : `<strong>${player.name}</strong>`
      }
      <span class="pill ${statusClass}">${statusLabel}</span>
      <span class="muted">Mesa: ${tableLabel} | Rebuys: ${rebuyText} | Add-ons: ${addonText}</span>
      <div class="row-actions">
        <button data-action="toggle-paid" data-id="${player.id}" class="primary">Pago/Pendente</button>
        <button data-action="${isEditing ? "save" : "edit"}" data-id="${player.id}" class="info">
          ${isEditing ? "Salvar" : "Editar nome"}
        </button>
        <button data-action="remove" data-id="${player.id}" class="danger">Remover</button>
      </div>
    `;
    elements.playersList.appendChild(item);
  });
  if (state.editingPlayerId) {
    const editInput = elements.playersList.querySelector('input[data-field="player-name"]');
    if (editInput) {
      editInput.focus();
      editInput.select();
    }
  }
}

function renderRebuyList() {
  if (!elements.rebuyList) return;
  elements.rebuyList.innerHTML = "";
  if (state.players.length === 0) {
    elements.rebuyList.innerHTML = `<span class="muted">Nenhum participante cadastrado.</span>`;
    return;
  }
  const sortedPlayers = [...state.players].sort((a, b) =>
    a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
  );
  sortedPlayers.forEach((player) => {
    const item = document.createElement("div");
    const isEliminated = Boolean(player.eliminated);
    const isChampion = Boolean(player.champion);
    const disableButtons = isEliminated || isChampion;
    item.className = "row rebuy-row" + (disableButtons ? " eliminated-row" : "");
    const rebuyLimit = Number(state.rebuyLimit);
    const addonLimit = Number(state.addonLimit);
    const statusClass = player.paid ? "paid" : "pending";
    const statusLabel = player.paid ? "Pago" : "Pendente";
    const canRebuyAdd = !disableButtons && (rebuyLimit <= 0 || player.rebuys < rebuyLimit);
    const canAddonAdd = !disableButtons && (addonLimit <= 0 || player.addons < addonLimit);
    const canRebuyRemove = player.rebuys > 0;
    const canAddonRemove = player.addons > 0;
    const rebuyLimitText = rebuyLimit > 0 ? formatInteger(rebuyLimit) : "0";
    const addonLimitText = addonLimit > 0 ? formatInteger(addonLimit) : "0";
    const rebuyText = rebuyLimit > 0 ? `${player.rebuys} / ${rebuyLimitText}` : `${player.rebuys}`;
    const addonText = addonLimit > 0 ? `${player.addons} / ${addonLimitText}` : `${player.addons}`;
    const eliminatedTime = player.eliminatedAt
      ? new Date(player.eliminatedAt).toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "--:--";
    const tableLabel = formatTableLabel(player.tableNumber);
    const eliminatedInfo = isEliminated
      ? `Eliminado na rodada ${player.eliminatedLevel || "-"} às ${eliminatedTime} - ${tableLabel}`
      : player.champion
        ? "1º lugar - Campeão"
        : "Nao eliminado";
    const placementInfo = isEliminated && player.eliminatedRank
      ? `Classificacao: ${player.eliminatedRank}º`
      : player.champion
        ? `Classificacao: 1º`
        : "";
    item.innerHTML = `
      <div class="rebuy-info">
        <strong class="${isEliminated ? "eliminated-name" : ""}">${player.name}</strong>
        ${player.champion ? '<span class="pill" style="background:#eab308;color:#111;margin-left:6px;">CAMPEÃO</span>' : ""}
        <span class="muted">Mesa: ${tableLabel} | Rebuys: ${rebuyText} | Add-ons: ${addonText}</span>
        <span class="muted">${eliminatedInfo}</span>
        ${placementInfo ? `<span class="muted">${placementInfo}</span>` : ""}
      </div>
      <div class="row-actions">
        <button data-action="rebuy-add" data-id="${player.id}" ${disableButtons ? "disabled" : canRebuyAdd ? "" : "disabled"}>Rebuy +</button>
        <button data-action="rebuy-remove" data-id="${player.id}" class="warning" ${disableButtons ? "disabled" : canRebuyRemove ? "" : "disabled"}>Rebuy -</button>
        <button data-action="addon-add" data-id="${player.id}" ${disableButtons ? "disabled" : canAddonAdd ? "" : "disabled"}>Add-on +</button>
        <button data-action="addon-remove" data-id="${player.id}" class="warning" ${disableButtons ? "disabled" : canAddonRemove ? "" : "disabled"}>Add-on -</button>
        <button data-action="eliminate" data-id="${player.id}" class="danger" ${disableButtons ? "disabled" : ""}>Eliminado</button>
      </div>
    `;
    elements.rebuyList.appendChild(item);
  });
}

function renderEvents() {
  if (!elements.eventsList) return;
  elements.eventsList.innerHTML = "";
  const events = [];
  if (state.tableAssignmentEvent) {
    events.push(state.tableAssignmentEvent);
  }
  if (state.tournamentStartEvent) {
    events.push(state.tournamentStartEvent);
  } else if (state.tournamentStartTs) {
    state.tournamentStartEvent = {
      type: "tournament-start",
      typeLabel: "Início do torneio",
      timestamp: state.tournamentStartTs,
    };
    events.push(state.tournamentStartEvent);
    saveState();
  }
  if (state.finalTableEvent) {
    events.push(state.finalTableEvent);
  }
  if (state.championEvent) {
    events.push(state.championEvent);
  }
  if (state.tournamentEndEvent) {
    events.push(state.tournamentEndEvent);
  }
  (state.transferEvents || []).forEach((evt) => {
    events.push({ ...evt, type: "transfer", typeLabel: "Transferência" });
  });
  (state.players || []).forEach((player) => {
    (player.rebuyEvents || []).forEach((evt) => {
      events.push({
        type: "rebuy",
        typeLabel: "Rebuy",
        playerName: player.name,
        tableNumber: evt.tableNumber,
        level: evt.level,
        levelDuration: evt.levelDuration,
        secondsRemaining: evt.secondsRemaining,
        timestamp: evt.timestamp,
      });
    });
    (player.addonEvents || []).forEach((evt) => {
      events.push({
        type: "addon",
        typeLabel: "Add-on",
        playerName: player.name,
        tableNumber: evt.tableNumber,
        level: evt.level,
        levelDuration: evt.levelDuration,
        secondsRemaining: evt.secondsRemaining,
        timestamp: evt.timestamp,
      });
    });
    if (player.eliminated && player.eliminatedAt) {
      events.push({
        type: "eliminated",
        typeLabel: "Eliminado",
        playerName: player.name,
        tableNumber: player.tableNumber,
        level: player.eliminatedLevel,
        levelDuration: player.eliminatedLevelDuration ?? null,
        secondsRemaining: player.eliminatedSecondsRemaining ?? null,
        timestamp: player.eliminatedAt,
        rank: player.eliminatedRank,
      });
    }
  });
  events.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  if (events.length === 0) {
    elements.eventsList.innerHTML = `<span class="muted">Nenhum evento registrado ainda.</span>`;
    return;
  }
  events.forEach((evt) => {
    const item = document.createElement("div");
    item.className = `row rebuy-row event-row event-${evt.type}`;
    const hora = evt.timestamp
      ? new Date(evt.timestamp).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      : "--:--";
    if (evt.type === "tables") {
      item.innerHTML = `
        <div class="rebuy-info">
          <span class="pill event-pill event-pill-tables">${evt.typeLabel}</span>
          <span class="muted">${evt.tablesSummary} · ${hora}</span>
        </div>
      `;
    } else if (evt.type === "tournament-start") {
      item.innerHTML = `
        <div class="rebuy-info">
          <span class="pill event-pill event-pill-tournament-start">${evt.typeLabel}</span>
          <span class="muted">Horário: ${hora}</span>
        </div>
      `;
    } else if (evt.type === "champion") {
      const rodada = evt.level != null ? String(evt.level) : "-";
      const tempoRodada =
        evt.secondsRemaining != null && evt.levelDuration != null
          ? `${formatTime(evt.secondsRemaining)} restantes (${evt.levelDuration} min)`
          : evt.levelDuration != null
            ? `${evt.levelDuration} min`
            : "-";
      item.innerHTML = `
        <div class="rebuy-info">
          <span class="pill event-pill event-pill-champion">${evt.typeLabel}</span>
          <strong>1º lugar - ${evt.playerName}</strong>
          <span class="muted">Rodada: ${rodada} · ${tempoRodada} · ${hora}</span>
        </div>
      `;
    } else if (evt.type === "tournament-end") {
      const rodada = evt.level != null ? String(evt.level) : "-";
      const tempoRodada =
        evt.secondsRemaining != null && evt.levelDuration != null
          ? `${formatTime(evt.secondsRemaining)} restantes (${evt.levelDuration} min)`
          : evt.levelDuration != null
            ? `${evt.levelDuration} min`
            : "-";
      item.innerHTML = `
        <div class="rebuy-info">
          <span class="pill event-pill event-pill-tournament-end">${evt.typeLabel}</span>
          <span class="muted">Rodada: ${rodada} · ${tempoRodada} · ${hora}</span>
        </div>
      `;
    } else if (evt.type === "final-table") {
      const rodada = evt.level != null ? String(evt.level) : "-";
      const tempoRodada =
        evt.secondsRemaining != null && evt.levelDuration != null
          ? `${formatTime(evt.secondsRemaining)} restantes (${evt.levelDuration} min)`
          : evt.levelDuration != null
            ? `${evt.levelDuration} min`
            : "-";
      item.innerHTML = `
        <div class="rebuy-info">
          <span class="pill event-pill event-pill-final-table">${evt.typeLabel}</span>
          <span class="muted">Rodada: ${rodada} · ${tempoRodada} · ${hora}</span>
          <div class="muted" style="margin-top: 4px;">${evt.participantsSummary || "-"}</div>
        </div>
      `;
    } else if (evt.type === "transfer") {
      const mesaOrigem = evt.sourceTable != null ? formatTableLabel(evt.sourceTable) : "-";
      const mesaDestino = evt.targetTable != null ? formatTableLabel(evt.targetTable) : "-";
      const rodada = evt.level != null ? String(evt.level) : "-";
      const fichas = evt.chips != null ? formatNumber(evt.chips) : "-";
      const tempoRodada =
        evt.secondsRemaining != null && evt.levelDuration != null
          ? `${formatTime(evt.secondsRemaining)} restantes (${evt.levelDuration} min)`
          : evt.levelDuration != null
            ? `${evt.levelDuration} min`
            : "-";
      item.innerHTML = `
        <div class="rebuy-info">
          <span class="pill event-pill event-pill-transfer">${evt.typeLabel}</span>
          <strong>${evt.playerName}</strong>
          <span class="muted">${mesaOrigem} → ${mesaDestino} · ${fichas} fichas · Rodada: ${rodada} · ${tempoRodada} · ${hora}</span>
        </div>
      `;
    } else {
      const mesa = evt.tableNumber != null && evt.tableNumber !== "" ? formatTableLabel(evt.tableNumber) : "-";
      const rodada = evt.level != null ? String(evt.level) : "-";
      const tempoRodada =
        evt.secondsRemaining != null && evt.levelDuration != null
          ? `${formatTime(evt.secondsRemaining)} restantes (${evt.levelDuration} min)`
          : evt.levelDuration != null
            ? `${evt.levelDuration} min`
            : "-";
      const rankInfo = evt.rank ? ` · ${evt.rank}º lugar` : "";
      item.innerHTML = `
        <div class="rebuy-info">
          <span class="pill event-pill event-pill-${evt.type}">${evt.typeLabel}</span>
          <strong>${evt.playerName}</strong>
          <span class="muted">Mesa: ${mesa} · Rodada: ${rodada} · ${tempoRodada} · ${hora}${rankInfo}</span>
        </div>
      `;
    }
    elements.eventsList.appendChild(item);
  });
}

function renderPayouts() {
  if (!elements.payoutTotal || !elements.expensesList) return;
  const paidCount = state.players.filter((player) => player.paid).length;
  const totalRebuys = state.players.reduce((sum, player) => sum + player.rebuys, 0);
  const totalAddons = state.players.reduce((sum, player) => sum + player.addons, 0);
  const totalCollected = (state.buyinValue * paidCount)
    + (state.rebuyValue * totalRebuys)
    + (state.addonValue * totalAddons);
  const totalBuyins = state.buyinValue * paidCount;
  const totalRebuyValue = state.rebuyValue * totalRebuys;
  const totalAddonValue = state.addonValue * totalAddons;
  elements.payoutTotal.textContent = formatCurrency(totalCollected);
  if (elements.payoutIncomeList) {
    elements.payoutIncomeList.innerHTML = `
      <div class="payout-item">
        <span>INSCRIÇÕES</span>
        <span>${formatCurrency(totalBuyins)}</span>
      </div>
      <div class="payout-item">
        <span>REBUY</span>
        <span>${formatCurrency(totalRebuyValue)}</span>
      </div>
      <div class="payout-item">
        <span>ADD-ON</span>
        <span>${formatCurrency(totalAddonValue)}</span>
      </div>
    `;
  }

  elements.expensesList.innerHTML = "";
  const expenses = Array.isArray(state.expenses) ? state.expenses : [];
  const savedExpenses = expenses.filter((expense) => expense.saved !== false);
  const draftExpenses = expenses.filter((expense) => expense.saved === false);
  const totalExpenses = savedExpenses.reduce((sum, expense) => sum + Number(expense.value || 0), 0);
  if (elements.payoutIncomeList) {
    elements.payoutIncomeList.innerHTML = `
      <div class="payout-item">
        <span>INSCRIÇÕES</span>
        <span>${formatCurrency(totalBuyins)}</span>
      </div>
      <div class="payout-item">
        <span>REBUY</span>
        <span>${formatCurrency(totalRebuyValue)}</span>
      </div>
      <div class="payout-item">
        <span>ADD-ON</span>
        <span>${formatCurrency(totalAddonValue)}</span>
      </div>
    `;
  }
  if (elements.payoutExpensesSummary) {
    if (savedExpenses.length === 0) {
      elements.payoutExpensesSummary.innerHTML = `
        <span class="muted">Sem despesas cadastradas.</span>
        <div class="payout-item payout-total-line">
          <span>TOTAL DESPESAS</span>
          <span>${formatCurrency(totalExpenses)}</span>
        </div>
      `;
    } else {
      elements.payoutExpensesSummary.innerHTML = savedExpenses.map((expense) => `
        <div class="payout-item">
          <span>${expense.name || "-"}</span>
          <span>${formatCurrency(expense.value || 0)}</span>
        </div>
      `).join("");
      elements.payoutExpensesSummary.innerHTML += `
        <div class="payout-item payout-total-line">
          <span>TOTAL DESPESAS</span>
          <span>${formatCurrency(totalExpenses)}</span>
        </div>
      `;
    }
  }
  const net = Math.max(0, totalCollected - totalExpenses);
  if (elements.payoutNet) {
    elements.payoutNet.textContent = formatCurrency(net);
  }
  const winnersCount = Math.max(0, Number(state.prizeWinners || 0));
  if (winnersCount > 0 && Array.isArray(state.prizeSplits)) {
    const splits = state.prizeSplits.slice(0, winnersCount);
    while (splits.length < winnersCount) splits.push(0);
    const totalPercent = splits.reduce((sum, v) => sum + Number(v || 0), 0);
    if (totalPercent === 100) {
      state.prizeAmounts = computePrizeAmounts(net, splits);
    }
  }
  if (elements.payoutPrizeSummary) {
    if (!state.prizeSaved || !Array.isArray(state.prizeAmounts) || state.prizeAmounts.length === 0) {
      elements.payoutPrizeSummary.innerHTML = "";
      if (elements.payoutPrizeTotal) elements.payoutPrizeTotal.textContent = "";
    } else {
      elements.payoutPrizeSummary.innerHTML = state.prizeAmounts.map((amount, index) => `
        <div class="payout-item">
          <span>${getPrizeLabel(index)}</span>
          <span>${formatCurrency(amount || 0)}</span>
        </div>
      `).join("");
      if (elements.payoutPrizeTotal) {
        const totalPrizeSaved = state.prizeAmounts.reduce((sum, value) => sum + Number(value || 0), 0);
        elements.payoutPrizeTotal.textContent = `Total prêmios salvos: ${formatCurrency(totalPrizeSaved)}`;
      }
    }
  }

  if (elements.prizeWinners) {
    const totalParticipants = state.players.length;
    const maxWinners = Math.max(0, totalParticipants);
    const options = [];
    for (let i = 1; i <= maxWinners; i += 1) {
      options.push(`<option value="${i}">${i}</option>`);
    }
    elements.prizeWinners.innerHTML = options.join("");
    const safeValue = Math.min(Math.max(Number(state.prizeWinners || 0), 1), maxWinners || 1);
    state.prizeWinners = maxWinners === 0 ? 0 : safeValue;
    elements.prizeWinners.value = String(state.prizeWinners);
  }

  if (elements.tablesCount) {
    const options = [];
    for (let i = 1; i <= 3; i += 1) {
      options.push(`<option value="${i}">${i}</option>`);
    }
    elements.tablesCount.innerHTML = options.join("");
    const safeValue = Math.min(3, Math.max(1, Number(state.tablesCount || 1)));
    state.tablesCount = safeValue;
    elements.tablesCount.value = String(safeValue);
    elements.tablesCount.disabled = Boolean(state.tablesLocked);
    if (elements.tablesActions) {
      elements.tablesActions.classList.toggle("hidden", !safeValue);
    }
    renderTablesList();
  }

  renderPrizeRows();

  if (!state.expensesMode) {
    elements.expensesList.innerHTML = "";
    return;
  }

  if (state.expensesMode === "edit") {
    if (savedExpenses.length === 0) {
      return;
    }
    savedExpenses.forEach((expense) => {
      const item = document.createElement("div");
      item.className = "row";
      item.innerHTML = `
        <div class="level-inline">
          <label class="inline-field">
            Descrição
            <input data-expense-field="name" data-id="${expense.id}" type="text" placeholder="Ex: Troféu" value="${expense.name || ""}" />
          </label>
          <label class="inline-field">
            Valor (R$)
            <div class="expense-actions">
            <input data-expense-field="value" data-id="${expense.id}" class="expense-value" type="text" inputmode="decimal" value="${formatNumber(expense.value || 0)}" />
            <button data-action="save-expense" data-id="${expense.id}">Salvar</button>
            <button data-action="remove-expense" data-id="${expense.id}" class="danger">Excluir</button>
            </div>
          </label>
        </div>
      `;
      elements.expensesList.appendChild(item);
    });
    return;
  }

  if (state.expensesMode !== "add") {
    return;
  }
  if (draftExpenses.length === 0) {
    elements.expensesList.innerHTML = `<span class="muted">Clique em Adicionar despesa para incluir.</span>`;
    return;
  }
  draftExpenses.forEach((expense) => {
    const item = document.createElement("div");
    item.className = "row";
    item.innerHTML = `
      <div class="level-inline">
        <label class="inline-field">
          Descrição
          <input data-expense-field="name" data-id="${expense.id}" type="text" placeholder="Ex: Troféu" value="${expense.name || ""}" />
        </label>
        <label class="inline-field">
          Valor (R$)
          <div class="expense-actions">
            <input data-expense-field="value" data-id="${expense.id}" class="expense-value" type="text" inputmode="decimal" value="${formatNumber(expense.value || 0)}" />
            <button data-action="save-expense" data-id="${expense.id}">Salvar</button>
          </div>
        </label>
      </div>
    `;
    elements.expensesList.appendChild(item);
  });
}

function getPrizeLabel(index) {
  return `${index + 1}º Lugar`;
}

function renderPrizeRows() {
  if (!elements.prizeList) return;
  const count = Math.max(0, Number(state.prizeWinners || 0));
  if (count === 0) {
    elements.prizeList.innerHTML = `<span class="muted">Sem premiação configurada.</span>`;
    return;
  }
  if (!Array.isArray(state.prizeSplits)) state.prizeSplits = [];
  if (!Array.isArray(state.prizeAmounts)) state.prizeAmounts = [];
  state.prizeSplits = state.prizeSplits.slice(0, count);
  state.prizeAmounts = state.prizeAmounts.slice(0, count);
  while (state.prizeSplits.length < count) state.prizeSplits.push(0);
  while (state.prizeAmounts.length < count) state.prizeAmounts.push(0);

  elements.prizeList.innerHTML = state.prizeSplits.map((value, index) => `
    <div class="prize-row">
      <strong>${getPrizeLabel(index)}</strong>
      <input
        data-prize-field="percent"
        data-index="${index}"
        type="text"
        inputmode="numeric"
        value="${Number(value || 0)}%"
      />
      <div class="prize-amount">${formatCurrency(state.prizeAmounts[index] || 0)}</div>
    </div>
  `).join("");
}

function renderTablesList() {
  if (!elements.tablesList) return;
  if (!state.tablesMode) {
    elements.tablesList.classList.add("hidden");
    elements.tablesList.innerHTML = "";
    if (elements.transferList) {
      elements.transferList.classList.add("hidden");
      elements.transferList.innerHTML = "";
    }
    return;
  }
  if (state.tablesMode === "transfer") {
    elements.tablesList.classList.add("hidden");
    elements.tablesList.innerHTML = "";
    renderTransferList();
    return;
  }
  elements.tablesList.classList.remove("hidden");
  if (state.players.length === 0) {
    elements.tablesList.innerHTML = `<span class="muted">Nenhum participante cadastrado.</span>`;
    return;
  }
  const maxTables = Math.max(1, Number(state.tablesCount || 1));
  const sortedPlayers = [...state.players].sort((a, b) =>
    a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
  );

  if (state.tablesMode === "manual") {
    elements.tablesList.innerHTML = sortedPlayers
      .map((player) => {
        const rowActions = player.eliminated
          ? `<span class="pill eliminated">ELIMINADO</span>`
          : Array.from({ length: maxTables }, (_, index) => {
              const tableNumber = index + 1;
              const isActive = Number(player.tableNumber) === tableNumber;
              return `
            <button
              class="${isActive ? "btn-active" : "secondary"}"
              data-action="assign-table"
              data-id="${player.id}"
              data-table="${tableNumber}"
            >
              MESA ${String(tableNumber).padStart(2, "0")}
            </button>
          `;
            }).join("");
        return `
          <div class="row table-row">
            <strong class="${player.eliminated ? "eliminated-name" : ""}">${player.name}</strong>
            <div class="row-actions">
              ${rowActions}
            </div>
          </div>
        `;
      })
      .join("");
    return;
  }

  if (state.tablesMode !== "view" && state.tablesMode !== "random") {
    elements.tablesList.innerHTML = "";
    return;
  }

  const grouped = Array.from({ length: maxTables }, () => []);
  sortedPlayers.forEach((player) => {
    const tableIndex = Number(player.tableNumber) > 0 ? Number(player.tableNumber) - 1 : -1;
    if (tableIndex >= 0 && tableIndex < maxTables) {
      grouped[tableIndex].push(player);
    }
  });
  const finalPlayers = sortedPlayers.filter((player) => Number(player.tableNumber) === 99);
  const formatPlayerInTable = (player) =>
    player.eliminated
      ? `<span class="player-entry player-eliminated"><span class="eliminated-name">${player.tableSeat || "-"} - ${player.name}</span> <span class="pill pill-sm eliminated">ELIMINADO</span></span>`
      : `<span class="player-entry">${player.tableSeat || "-"} - ${player.name}</span>`;

  elements.tablesList.innerHTML = grouped.map((players, index) => {
    const orderedPlayers = [...players].sort((a, b) => {
      const aSeat = Number(a.tableSeat || 0);
      const bSeat = Number(b.tableSeat || 0);
      return aSeat - bSeat;
    });
    return `
    <div class="row">
      <strong>Mesa ${String(index + 1).padStart(2, "0")}</strong>
      ${orderedPlayers.length === 0
        ? `<span class="muted">Sem participantes</span>`
        : orderedPlayers.map(formatPlayerInTable).join(" ")}
    </div>
  `;
  }).join("");
  if (finalPlayers.length > 0) {
    const orderedFinal = [...finalPlayers].sort((a, b) => Number(a.tableSeat || 0) - Number(b.tableSeat || 0));
    elements.tablesList.innerHTML += `
      <div class="row">
        <strong>Mesa Final</strong>
        ${orderedFinal.map(formatPlayerInTable).join(" ")}
      </div>
    `;
  }
}

function renderTransferList() {
  if (!elements.transferList) return;
  const sourceValue = elements.transferSource?.value || "";
  const sourceTable = Number(sourceValue || 0);
  if (!sourceTable) {
    elements.transferList.classList.add("hidden");
    elements.transferList.innerHTML = "";
    return;
  }
  const playersInTable = state.players.filter(
    (player) => Number(player.tableNumber) === sourceTable
  );
  elements.transferList.classList.remove("hidden");
  if (playersInTable.length === 0) {
    elements.transferList.innerHTML = `<span class="muted">Mesa sem participantes.</span>`;
    return;
  }
  const ordered = [...playersInTable].sort((a, b) => {
    const aSeat = Number(a.tableSeat || 0);
    const bSeat = Number(b.tableSeat || 0);
    return aSeat - bSeat;
  });
  elements.transferList.innerHTML = ordered
    .map((player) => `
      <div class="row table-row">
        <strong>${player.tableSeat ? `${player.tableSeat} - ` : ""}${player.name}</strong>
        <div class="row-actions">
          ${
            player.eliminated
              ? `<span class="pill eliminated">ELIMINADO</span>`
              : `<button data-action="transfer-player" data-id="${player.id}" class="secondary">Transferir</button>
          <input
            data-action="transfer-chips"
            data-id="${player.id}"
            type="text"
            inputmode="decimal"
            placeholder="Quantidade de fichas"
            class="tables-select hidden"
          />
          <select data-action="transfer-target" data-id="${player.id}" class="tables-select hidden">
            <option value="">Mesa destino</option>
            ${Array.from({ length: Math.max(1, Number(state.tablesCount || 1)) }, (_, idx) => {
              const tableNumber = idx + 1;
              return `<option value="${tableNumber}">Mesa ${String(tableNumber).padStart(2, "0")}</option>`;
            }).join("")}
          </select>
          <button data-action="confirm-transfer" data-id="${player.id}" class="primary hidden">Confirmar</button>`
          }
        </div>
      </div>
    `)
    .join("");
}

function renderHistoryRecords() {
  if (!elements.historyList) return;
  elements.historyList.innerHTML = "";
  if (historyRecords.length === 0) {
    elements.historyList.innerHTML = `<span class="muted">Nenhum torneio cadastrado.</span>`;
    renderHistoryYears();
    return;
  }
  historyRecords.forEach((record) => {
    const item = document.createElement("div");
    item.className = "row";
    item.innerHTML = `
      <strong>${record.title || record.date || "-"}</strong>
      <span class="muted">Campeao: ${record.champion || "-"}</span>
      <span class="muted">Participantes: ${record.participants || 0}</span>
      <span class="muted">Classificacao: ${record.placement || "-"}</span>
      <div class="row-actions">
        <button data-action="remove" data-id="${record.id}" class="secondary">Remover</button>
      </div>
    `;
    elements.historyList.appendChild(item);
  });
  renderHistoryYears();
}

function renderHistoryYears() {
  if (!elements.historyYears) return;
  elements.historyYears.innerHTML = "";
  const years = Array.from(
    new Set(historyRecords.map((record) => getYearFromDate(record.date)).filter(Boolean))
  ).sort((a, b) => Number(b) - Number(a));
  if (years.length === 0) {
    elements.historyYears.innerHTML = `<span class="muted">Nenhum historico cadastrado.</span>`;
    if (elements.historyDetails) {
      elements.historyDetails.innerHTML = "";
    }
    return;
  }
  years.forEach((year) => {
    const button = document.createElement("button");
    button.className = "year-btn";
    button.dataset.year = year;
    button.textContent = year;
    elements.historyYears.appendChild(button);
  });
}

function renderHistoryDetails(year) {
  if (!elements.historyDetails) return;
  const record = historyRecords.find((item) => getYearFromDate(item.date) === year);
  if (!record) {
    elements.historyDetails.innerHTML = `<span class="muted">Sem detalhes para ${year}.</span>`;
    return;
  }
  elements.historyDetails.innerHTML = `
    <strong>${record.title || "Torneio da familia"}</strong>
    <span class="muted">Data: ${record.date || "-"}</span>
    <span class="muted">Participantes: ${record.participants || 0}</span>
    <span class="muted">Rebuys: ${record.rebuys || 0} | Add-ons: ${record.addons || 0}</span>
    <span class="muted">Valores: ${record.values || "-"}</span>
    <span class="muted">Classificacao: ${record.placement || "-"}</span>
  `;
}

function renderStaticHistory() {
  if (!elements.historyTournaments) return;
  elements.historyTournaments.innerHTML = STATIC_HISTORY.map(
    (t, index) => `
    <div class="history-tournament-card">
      <div class="history-tournament-header">
        <h3 class="history-tournament-title">${t.title}</h3>
        <button type="button" class="btn-fotos secondary" data-history-index="${index}">FOTOS</button>
      </div>
      <div class="history-tournament-info">
        <p><span class="label label-bold-upper">Campeão:</span> <strong>${t.champion}</strong></p>
        <p><span class="label">Vice-campeão:</span> ${t.viceChampion}</p>
      </div>
    </div>
  `
  ).join("");
}

function openChampionPhotoModal(index) {
  const entry = STATIC_HISTORY[Number(index)];
  if (!entry || !elements.championPhotoModal) return;
  const img = elements.championPhotoModalImage;
  const placeholder = elements.championPhotoModalPlaceholder;
  const titleEl = elements.championPhotoModalTitle;
  if (titleEl) titleEl.textContent = entry.title;
  const photoUrl = (entry.photoUrl || "").trim();
  if (photoUrl && img) {
    img.src = photoUrl;
    img.classList.remove("hidden");
    img.onerror = () => {
      img.classList.add("hidden");
      if (placeholder) placeholder.classList.remove("hidden");
    };
    if (placeholder) placeholder.classList.add("hidden");
  } else {
    if (img) {
      img.src = "";
      img.classList.add("hidden");
    }
    if (placeholder) placeholder.classList.remove("hidden");
  }
  elements.championPhotoModal.classList.add("is-open");
  elements.championPhotoModal.setAttribute("aria-hidden", "false");
}

function closeChampionPhotoModal() {
  if (!elements.championPhotoModal) return;
  elements.championPhotoModal.classList.remove("is-open");
  elements.championPhotoModal.setAttribute("aria-hidden", "true");
}

function addLevel() {
  const duration = Number(elements.blindDuration.value);
  const isBreak = elements.blindBreak.checked;
  if (!duration) return;
  if (isBreak) {
    state.levels.push({ small: 0, big: 0, duration, isBreak: true });
  } else {
    const small = parseNumber(elements.blindSmall.value);
    const big = parseNumber(elements.blindBig.value);
    if (!small || !big) return;
    state.levels.push({ small, big, duration, isBreak: false });
  }
  elements.blindBreak.checked = false;
  toggleBreakInputs();
  elements.blindSmall.value = "";
  elements.blindBig.value = "";
  elements.blindSmall.focus();
  renderLevels();
  updateClockDisplay();
  saveState();
}

function addPlayer() {
  const name = elements.playerName.value.trim();
  if (!name) return;
  const paid = elements.playerStatus.value === "paid";
  state.players.push({
    id: crypto.randomUUID(),
    name,
    paid,
    rebuys: 0,
    addons: 0,
    rebuyEvents: [],
    addonEvents: [],
    eliminated: false,
    eliminatedAt: null,
    eliminatedLevel: null,
    tableNumber: null,
    tableSeat: null,
  });
  elements.playerName.value = "";
  renderPlayers();
  renderRebuyList();
  renderPayouts();
  updateSummary();
  saveState();
}

function toggleBreakInputs() {
  const isBreak = elements.blindBreak.checked;
  elements.blindSmall.disabled = isBreak;
  elements.blindBig.disabled = isBreak;
  if (isBreak) {
    elements.blindSmall.value = formatNumber(0);
    elements.blindBig.value = formatNumber(0);
  }
}

function setView(viewName) {
  elements.views.forEach((view) => {
    view.classList.toggle("active", view.dataset.view === viewName);
  });
  elements.navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  if (viewName === "payouts") {
    state.expensesMode = null;
    if (elements.expensesList) {
      elements.expensesList.innerHTML = "";
    }
    if (elements.prizeFields) {
      elements.prizeFields.classList.add("hidden");
    }
    if (elements.addExpense) elements.addExpense.classList.remove("btn-active");
    if (elements.editExpenses) elements.editExpenses.classList.remove("btn-active");
    if (elements.togglePrize) elements.togglePrize.classList.remove("btn-active");
  }
  if (viewName === "tables") {
    state.tablesMode = null;
    if (elements.transferFields) elements.transferFields.classList.add("hidden");
    if (elements.transferList) {
      elements.transferList.classList.add("hidden");
      elements.transferList.innerHTML = "";
    }
    if (elements.tablesList) {
      elements.tablesList.classList.add("hidden");
      elements.tablesList.innerHTML = "";
    }
    if (elements.manualTables) elements.manualTables.classList.remove("btn-active");
    if (elements.randomTables) elements.randomTables.classList.remove("btn-active");
    if (elements.viewTables) elements.viewTables.classList.remove("btn-active");
    if (elements.transferTables) elements.transferTables.classList.remove("btn-active");
  }
  if (viewName === "events") {
    renderEvents();
  }
}

function initializeFormValues() {
  elements.tournamentName.value = state.tournamentName;
  elements.buyinValue.value = formatNumber(state.buyinValue);
  elements.buyinChips.value = formatNumber(state.buyinChips);
  elements.rebuyValue.value = formatNumber(state.rebuyValue);
  elements.rebuyChips.value = formatNumber(state.rebuyChips);
  elements.addonValue.value = formatNumber(state.addonValue);
  elements.addonChips.value = formatNumber(state.addonChips);
  elements.rebuyLimit.value = formatInteger(state.rebuyLimit);
  elements.addonLimit.value = formatInteger(state.addonLimit);
  const [chip1, chip2, chip3, chip4, chip5] = state.chipValues || [];
  if (elements.chipValue1) elements.chipValue1.value = formatNumber(chip1 || 0);
  if (elements.chipValue2) elements.chipValue2.value = formatNumber(chip2 || 0);
  if (elements.chipValue3) elements.chipValue3.value = formatNumber(chip3 || 0);
  if (elements.chipValue4) elements.chipValue4.value = formatNumber(chip4 || 0);
  if (elements.chipValue5) elements.chipValue5.value = formatNumber(chip5 || 0);
  if (state.levels[state.currentLevelIndex]) {
    elements.blindSmall.value = formatNumber(state.levels[state.currentLevelIndex].small);
    elements.blindBig.value = formatNumber(state.levels[state.currentLevelIndex].big);
    elements.blindDuration.value = state.levels[state.currentLevelIndex].duration;
  } else {
    elements.blindSmall.value = "";
    elements.blindBig.value = "";
    elements.blindDuration.value = "";
  }
  toggleBreakInputs();
  setValuesEditing(state.valuesEditing);
}

function bindEvents() {
  elements.navButtons.forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  elements.tournamentName.addEventListener("input", (event) => {
    state.tournamentName = event.target.value;
    updateSummary();
    saveState();
  });

  elements.buyinValue.addEventListener("input", (event) => {
    if (!state.valuesEditing) return;
    state.buyinValue = parseNumber(event.target.value);
    updateSummary();
    saveState();
  });

  elements.buyinValue.addEventListener("blur", (event) => {
    event.target.value = formatNumber(state.buyinValue);
  });

  elements.buyinChips.addEventListener("input", (event) => {
    if (!state.valuesEditing) return;
    state.buyinChips = parseNumber(event.target.value);
    saveState();
  });

  elements.buyinChips.addEventListener("blur", (event) => {
    event.target.value = formatNumber(state.buyinChips);
  });

  elements.rebuyValue.addEventListener("input", (event) => {
    if (!state.valuesEditing) return;
    state.rebuyValue = parseNumber(event.target.value);
    saveState();
  });

  elements.rebuyValue.addEventListener("blur", (event) => {
    event.target.value = formatNumber(state.rebuyValue);
  });

  elements.rebuyChips.addEventListener("input", (event) => {
    if (!state.valuesEditing) return;
    state.rebuyChips = parseNumber(event.target.value);
    saveState();
  });

  elements.rebuyChips.addEventListener("blur", (event) => {
    event.target.value = formatNumber(state.rebuyChips);
  });

  elements.addonValue.addEventListener("input", (event) => {
    if (!state.valuesEditing) return;
    state.addonValue = parseNumber(event.target.value);
    saveState();
  });

  elements.addonValue.addEventListener("blur", (event) => {
    event.target.value = formatNumber(state.addonValue);
  });

  elements.addonChips.addEventListener("input", (event) => {
    if (!state.valuesEditing) return;
    state.addonChips = parseNumber(event.target.value);
    saveState();
  });

  elements.addonChips.addEventListener("blur", (event) => {
    event.target.value = formatNumber(state.addonChips);
  });

  if (elements.chipValue1) {
    elements.chipValue1.addEventListener("input", (event) => {
      if (!state.valuesEditing) return;
      state.chipValues[0] = parseNumber(event.target.value);
      saveState();
    });
    elements.chipValue1.addEventListener("blur", (event) => {
      event.target.value = formatNumber(state.chipValues[0]);
    });
  }
  if (elements.chipValue2) {
    elements.chipValue2.addEventListener("input", (event) => {
      if (!state.valuesEditing) return;
      state.chipValues[1] = parseNumber(event.target.value);
      saveState();
    });
    elements.chipValue2.addEventListener("blur", (event) => {
      event.target.value = formatNumber(state.chipValues[1]);
    });
  }
  if (elements.chipValue3) {
    elements.chipValue3.addEventListener("input", (event) => {
      if (!state.valuesEditing) return;
      state.chipValues[2] = parseNumber(event.target.value);
      saveState();
    });
    elements.chipValue3.addEventListener("blur", (event) => {
      event.target.value = formatNumber(state.chipValues[2]);
    });
  }
  if (elements.chipValue4) {
    elements.chipValue4.addEventListener("input", (event) => {
      if (!state.valuesEditing) return;
      state.chipValues[3] = parseNumber(event.target.value);
      saveState();
    });
    elements.chipValue4.addEventListener("blur", (event) => {
      event.target.value = formatNumber(state.chipValues[3]);
    });
  }
  if (elements.chipValue5) {
    elements.chipValue5.addEventListener("input", (event) => {
      if (!state.valuesEditing) return;
      state.chipValues[4] = parseNumber(event.target.value);
      saveState();
    });
    elements.chipValue5.addEventListener("blur", (event) => {
      event.target.value = formatNumber(state.chipValues[4]);
    });
  }

  elements.rebuyLimit.addEventListener("input", (event) => {
    if (!state.valuesEditing) return;
    const sanitized = sanitizeIntegerInput(event.target.value);
    event.target.value = sanitized;
    state.rebuyLimit = Math.max(0, Number(sanitized || 0));
    renderPlayers();
    renderRebuyList();
    renderPayouts();
    saveState();
  });

  elements.rebuyLimit.addEventListener("blur", (event) => {
    event.target.value = formatInteger(state.rebuyLimit);
  });

  elements.addonLimit.addEventListener("input", (event) => {
    if (!state.valuesEditing) return;
    const sanitized = sanitizeIntegerInput(event.target.value);
    event.target.value = sanitized;
    state.addonLimit = Math.max(0, Number(sanitized || 0));
    renderPlayers();
    renderRebuyList();
    renderPayouts();
    saveState();
  });

  elements.addonLimit.addEventListener("blur", (event) => {
    event.target.value = formatInteger(state.addonLimit);
  });

  if (elements.prizeWinners) {
    elements.prizeWinners.value = String(Math.max(0, Number(state.prizeWinners || 0)));
  }

  elements.blindBreak.addEventListener("change", toggleBreakInputs);
  elements.blindSmall.addEventListener("blur", (event) => {
    event.target.value = formatNumber(parseNumber(event.target.value));
  });
  elements.blindBig.addEventListener("blur", (event) => {
    event.target.value = formatNumber(parseNumber(event.target.value));
  });
  elements.blindSmall.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      elements.addLevel.click();
    }
  });
  elements.blindBig.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      elements.addLevel.click();
    }
  });
  elements.blindDuration.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      elements.addLevel.click();
    }
  });
  elements.addLevel.addEventListener("click", addLevel);
  if (elements.clockStart) elements.clockStart.addEventListener("click", startClock);
  if (elements.clockPause) elements.clockPause.addEventListener("click", pauseClock);
  if (elements.clockEdit) {
    elements.clockEdit.addEventListener("click", () => {
      const input = prompt("Novo tempo (mm:ss)", formatTime(state.secondsRemaining));
      if (!input) return;
      const parsedSeconds = parseTimeString(input);
      if (parsedSeconds === null) {
        alert("Formato invalido. Use mm:ss, por exemplo 05:30.");
        return;
      }
      state.secondsRemaining = parsedSeconds;
      updateClockDisplay();
      saveState();
    });
  }
  if (elements.clockPrev) elements.clockPrev.addEventListener("click", () => setLevel(state.currentLevelIndex - 1));
  if (elements.clockNext) elements.clockNext.addEventListener("click", () => setLevel(state.currentLevelIndex + 1));
  if (elements.clockReset) elements.clockReset.addEventListener("click", () => setLevel(0));

  elements.levelsList.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const index = Number(button.dataset.index);
    if (button.dataset.action === "use") setLevel(index);
    if (button.dataset.action === "update") {
      const row = button.closest(".row");
      if (!row) return;
      const smallInput = row.querySelector('[data-field="small"]');
      const bigInput = row.querySelector('[data-field="big"]');
      const durationInput = row.querySelector('[data-field="duration"]');
      const breakInput = row.querySelector('[data-field="break"]');
      const duration = Number(durationInput?.value);
      if (!duration) return;
      const isBreak = Boolean(breakInput?.checked);
      if (isBreak) {
        state.levels[index] = { small: 0, big: 0, duration, isBreak: true };
      } else {
        const small = parseNumber(smallInput?.value || "");
        const big = parseNumber(bigInput?.value || "");
        if (!small || !big) return;
        state.levels[index] = { small, big, duration, isBreak: false };
      }
      renderLevels();
      updateClockDisplay();
      saveState();
    }
    if (button.dataset.action === "remove") {
      state.levels.splice(index, 1);
      renderLevels();
      if (state.currentLevelIndex >= state.levels.length) {
        setLevel(state.levels.length - 1);
      }
      updateClockDisplay();
      saveState();
    }
  });

  elements.levelsList.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.field !== "break") return;
    const row = target.closest(".row");
    if (!row) return;
    const disableBlinds = target.checked;
    const smallInput = row.querySelector('[data-field="small"]');
    const bigInput = row.querySelector('[data-field="big"]');
    if (smallInput) smallInput.disabled = disableBlinds;
    if (bigInput) bigInput.disabled = disableBlinds;
    if (disableBlinds) {
      if (smallInput) smallInput.value = formatNumber(0);
      if (bigInput) bigInput.value = formatNumber(0);
    }
  });

  elements.levelsList.addEventListener("focusout", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.dataset.field === "small" || target.dataset.field === "big") {
      target.value = formatNumber(parseNumber(target.value));
    }
  });

  elements.addPlayer.addEventListener("click", addPlayer);
  elements.playerName.addEventListener("input", (event) => {
    const target = event.target;
    if (target && typeof target.value === "string") {
      target.value = target.value.toUpperCase();
    }
  });
  elements.playerName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      elements.addPlayer.click();
    }
  });

  if (elements.editValues) {
    elements.editValues.addEventListener("click", () => setValuesEditing(true));
  }

  if (elements.saveValues) {
    elements.saveValues.addEventListener("click", saveValues);
  }


  if (elements.restartTournament) {
    elements.restartTournament.addEventListener("click", restartTournament);
  }
  const scriptUrlInput = document.getElementById("scriptUrlInput");
  const saveScriptUrl = document.getElementById("saveScriptUrl");
  const mobileLinkBlock = document.getElementById("mobileLinkBlock");
  const mobileLinkInput = document.getElementById("mobileLinkInput");
  const copyMobileLink = document.getElementById("copyMobileLink");
  if (scriptUrlInput) scriptUrlInput.value = localStorage.getItem(SCRIPT_URL_KEY) || "";
  if (mobileLinkBlock && mobileLinkInput) {
    const url = localStorage.getItem(SCRIPT_URL_KEY);
    if (url) {
      mobileLinkBlock.classList.remove("hidden");
      const dir = (window.location.pathname.endsWith("/") ? window.location.pathname : window.location.pathname.replace(/\/[^/]+$/, "/"));
      const mobileUrl = window.location.origin + dir + "mobile.html?script=" + encodeURIComponent(url);
      mobileLinkInput.value = mobileUrl;
      const qrImg = document.getElementById("mobileQrCode");
      if (qrImg) qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(mobileUrl);
    }
  }
  if (saveScriptUrl && scriptUrlInput) {
    saveScriptUrl.addEventListener("click", () => {
      const val = scriptUrlInput.value.trim();
      if (val) {
        localStorage.setItem(SCRIPT_URL_KEY, val);
        startSyncLoop();
        if (mobileLinkBlock && mobileLinkInput) {
          mobileLinkBlock.classList.remove("hidden");
          const dir = (window.location.pathname.endsWith("/") ? window.location.pathname : window.location.pathname.replace(/\/[^/]+$/, "/"));
          const mobileUrl = window.location.origin + dir + "mobile.html?script=" + encodeURIComponent(val);
          mobileLinkInput.value = mobileUrl;
          const qrImg = document.getElementById("mobileQrCode");
          if (qrImg) qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(mobileUrl);
        }
        window.alert("URL salva. Copie o link do celular e abra no navegador do celular.");
      } else {
        localStorage.removeItem(SCRIPT_URL_KEY);
        if (syncIntervalId) clearInterval(syncIntervalId);
        syncIntervalId = null;
        if (mobileLinkBlock) mobileLinkBlock.classList.add("hidden");
      }
    });
  }
  if (copyMobileLink && mobileLinkInput) {
    copyMobileLink.addEventListener("click", () => {
      mobileLinkInput.select();
      navigator.clipboard.writeText(mobileLinkInput.value).then(() => {
        window.alert("Link copiado! Envie por WhatsApp ou abra no celular.");
      }).catch(() => {});
    });
  }
  if (elements.exportConfigAdmin) {
    elements.exportConfigAdmin.addEventListener("click", exportConfig);
  }

  if (elements.exportPlayersAdmin) {
    elements.exportPlayersAdmin.addEventListener("click", exportPlayers);
  }

  if (elements.importPlayers) {
    elements.importPlayers.addEventListener("click", () => {
      const file = elements.importPlayersFile?.files?.[0];
      if (!file) return;
      const proceed = window.confirm("Este processo vai apagar os participantes atuais. Deseja continuar?");
      if (!proceed) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(String(reader.result || "{}"));
          const names = Array.isArray(data.names) ? data.names : [];
          state.players = names
            .map((name) => String(name || "").trim())
            .filter((name) => name.length > 0)
            .map((name) => ({
              id: crypto.randomUUID(),
              name,
              paid: false,
              rebuys: 0,
              addons: 0,
              rebuyEvents: [],
              addonEvents: [],
              eliminated: false,
              eliminatedAt: null,
              eliminatedLevel: null,
              tableNumber: null,
              tableSeat: null,
            }));
          renderPlayers();
          renderRebuyList();
          renderTablesList();
          updateSummary();
          saveState();
        } catch (error) {
          window.alert("Arquivo de participantes invalido.");
        }
      };
      reader.readAsText(file, "utf-8");
    });
  }

  if (elements.addHistory) {
    elements.addHistory.addEventListener("click", () => {
      const title = elements.historyTitle?.value?.trim() || "";
      const date = elements.historyDate.value;
      const champion = elements.historyChampion.value.trim();
      const participants = Number(elements.historyParticipants.value || 0);
      const rebuys = Number(elements.historyRebuys?.value || 0);
      const addons = Number(elements.historyAddons?.value || 0);
      const values = elements.historyValues?.value?.trim() || "";
      const placement = elements.historyPlacement.value.trim();
      if (!date) return;
      historyRecords.push({
        id: crypto.randomUUID(),
        title,
        date,
        champion,
        participants,
        rebuys,
        addons,
        values,
        placement,
      });
      if (elements.historyTitle) elements.historyTitle.value = "";
      elements.historyDate.value = "";
      elements.historyChampion.value = "";
      elements.historyParticipants.value = "";
      if (elements.historyRebuys) elements.historyRebuys.value = "";
      if (elements.historyAddons) elements.historyAddons.value = "";
      if (elements.historyValues) elements.historyValues.value = "";
      elements.historyPlacement.value = "";
      renderHistoryRecords();
      saveHistoryRecords();
    });
  }

  if (elements.importHistory) {
    elements.importHistory.addEventListener("click", () => {
      const file = elements.importHistoryFile?.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const rows = parseCsv(String(reader.result || ""));
        const mapped = rows
          .filter((row) => row.date || row.champion || row.title)
          .map((row) => ({
            id: crypto.randomUUID(),
            title: row.title || "",
            date: row.date,
            champion: row.champion,
            participants: row.participants || 0,
            rebuys: row.rebuys || 0,
            addons: row.addons || 0,
            values: row.values || "",
            placement: row.placement || "",
          }));
        if (mapped.length === 0) return;
        historyRecords = [...historyRecords, ...mapped];
        renderHistoryRecords();
        saveHistoryRecords();
        if (elements.importHistoryFile) elements.importHistoryFile.value = "";
      };
      reader.readAsText(file, "utf-8");
    });
  }

  if (elements.historyList) {
    elements.historyList.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      const recordId = button.dataset.id;
      if (button.dataset.action === "remove") {
        historyRecords = historyRecords.filter((record) => record.id !== recordId);
        renderHistoryRecords();
        saveHistoryRecords();
      }
    });
  }

  if (elements.historyYears) {
    elements.historyYears.addEventListener("click", (event) => {
      const button = event.target.closest(".year-btn");
      if (!button) return;
      const year = button.dataset.year;
      if (!year) return;
      renderHistoryDetails(year);
    });
  }

  if (elements.historyTournaments) {
    elements.historyTournaments.addEventListener("click", (event) => {
      const btn = event.target.closest(".btn-fotos");
      if (!btn) return;
      const index = btn.dataset.historyIndex;
      if (index === undefined) return;
      openChampionPhotoModal(index);
    });
  }

  if (elements.championPhotoModal) {
    const backdrop = elements.championPhotoModal.querySelector(".photo-modal-backdrop");
    const closeBtn = elements.championPhotoModal.querySelector(".photo-modal-close");
    if (backdrop) backdrop.addEventListener("click", closeChampionPhotoModal);
    if (closeBtn) closeBtn.addEventListener("click", closeChampionPhotoModal);
  }

  if (elements.backToStart) {
    elements.backToStart.addEventListener("click", () => {
      const confirmar = window.confirm(
        "Todas as informacoes serao perdidas. Deseja continuar?"
      );
      if (!confirmar) return;
      setStarted(false);
      updateHomeView();
    });
  }


  if (elements.startWithoutImport) {
    elements.startWithoutImport.addEventListener("click", () => {
      resetTournamentData();
      initializeFormValues();
      renderLevels();
      renderPlayers();
      renderRebuyList();
      renderEvents();
      updateSummary();
      updateClockDisplay();
      setStarted(true);
    });
  }

  if (elements.importConfigFile) {
    elements.importConfigFile.addEventListener("change", () => {
      const hasFile = elements.importConfigFile?.files?.length > 0;
      if (elements.importConfigBtn) {
        elements.importConfigBtn.classList.toggle("import-btn-ready", !!hasFile);
      }
    });
  }

  if (elements.importConfigBtn) {
    elements.importConfigBtn.addEventListener("click", () => {
      const file = elements.importConfigFile?.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(String(reader.result || "{}"));
          applyConfigData(data);
          setStarted(true);
        } catch (error) {
          console.warn("Arquivo de configuracao invalido.");
        }
      };
      reader.readAsText(file, "utf-8");
    });
  }

  if (elements.startTournament) {
    elements.startTournament.addEventListener("click", () => {
      const activePlayers = state.players.filter((p) => !p.eliminated);
      const playersWithoutTable = activePlayers.filter((p) => !(Number(p.tableNumber) > 0));
      if (playersWithoutTable.length > 0) {
        const names = playersWithoutTable.map((p) => p.name).join(", ");
        window.alert(
          `Os seguintes jogadores ainda não estão em nenhuma mesa:\n\n${names}\n\nPor favor, atribua todos os participantes às mesas antes de iniciar o torneio.`
        );
        return;
      }
      if (activePlayers.length === 0) {
        window.alert("Não há participantes cadastrados. Adicione jogadores antes de iniciar o torneio.");
        return;
      }
      const tablesMap = new Map();
      state.players.forEach((p) => {
        const tn = Number(p.tableNumber);
        if (tn > 0) {
          if (!tablesMap.has(tn)) tablesMap.set(tn, []);
          tablesMap.get(tn).push(p.name);
        }
      });
      const tablesSummary = Array.from(tablesMap.entries())
        .sort((a, b) => (a[0] === 99 ? 999 : a[0]) - (b[0] === 99 ? 999 : b[0]))
        .map(([num, names]) => `${formatTableLabel(num)}: ${names.join(", ")}`)
        .join(" | ");
      state.tableAssignmentEvent = {
        type: "tables",
        typeLabel: "Mesas definidas",
        timestamp: Date.now(),
        tablesSummary,
      };
      renderEvents();
      updateStartTournamentButton();
      saveState();
      window.alert("Torneio Validado! Abra o Painel para exibir o torneio.");
    });
  }

  if (elements.openDisplay) {
    elements.openDisplay.addEventListener("click", openDisplayWindow);
  }
  elements.playersList.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const playerId = button.dataset.id;
    const player = state.players.find((p) => p.id === playerId);
    if (!player) return;
    if (button.dataset.action === "toggle-paid") player.paid = !player.paid;
    if (button.dataset.action === "rebuy-add") {
      if (state.rebuyLimit <= 0 || player.rebuys < state.rebuyLimit) {
        player.rebuys += 1;
        (player.rebuyEvents = player.rebuyEvents || []).push({ ...captureEventContext(player), playerName: player.name, playerId: player.id });
      }
    }
    if (button.dataset.action === "rebuy-remove") {
      if (player.rebuys > 0) {
        player.rebuys -= 1;
        if (Array.isArray(player.rebuyEvents) && player.rebuyEvents.length > 0) player.rebuyEvents.pop();
      }
    }
    if (button.dataset.action === "addon-add") {
      if (state.addonLimit <= 0 || player.addons < state.addonLimit) {
        player.addons += 1;
        (player.addonEvents = player.addonEvents || []).push({ ...captureEventContext(player), playerName: player.name, playerId: player.id });
      }
    }
    if (button.dataset.action === "addon-remove") {
      if (player.addons > 0) {
        player.addons -= 1;
        if (Array.isArray(player.addonEvents) && player.addonEvents.length > 0) player.addonEvents.pop();
      }
    }
    if (button.dataset.action === "edit") {
      state.editingPlayerId = player.id;
    }
    if (button.dataset.action === "save") {
      const row = button.closest(".row");
      const nameInput = row ? row.querySelector('input[data-field="player-name"]') : null;
      if (nameInput) {
        const trimmedName = nameInput.value.trim();
        if (trimmedName) {
          player.name = trimmedName;
        }
      }
      state.editingPlayerId = null;
    }
    if (button.dataset.action === "remove") {
      state.players = state.players.filter((p) => p.id !== playerId);
    }
    renderPlayers();
    renderRebuyList();
    renderEvents();
    renderPayouts();
    updateSummary();
    saveState();
  });

  elements.playersList.addEventListener("input", (event) => {
    const input = event.target.closest('input[data-field="player-name"]');
    if (!input) return;
    input.value = input.value.toUpperCase();
  });

  elements.playersList.addEventListener("keydown", (event) => {
    const input = event.target.closest('input[data-field="player-name"]');
    if (!input) return;
    if (event.key !== "Enter") return;
    event.preventDefault();
    const playerId = input.dataset.id;
    const player = state.players.find((p) => p.id === playerId);
    if (!player) return;
    const trimmedName = input.value.trim();
    if (trimmedName) {
      player.name = trimmedName;
    }
    state.editingPlayerId = null;
    renderPlayers();
    renderRebuyList();
    updateSummary();
    saveState();
  });

  if (elements.rebuyList) {
    elements.rebuyList.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      const playerId = button.dataset.id;
      const player = state.players.find((p) => p.id === playerId);
      if (!player) return;
      const isEliminated = Boolean(player.eliminated);
      if (button.dataset.action === "rebuy-add" && !isEliminated) {
        if (state.rebuyLimit <= 0 || player.rebuys < state.rebuyLimit) {
          player.rebuys += 1;
          (player.rebuyEvents = player.rebuyEvents || []).push({ ...captureEventContext(player), playerName: player.name, playerId: player.id });
        }
      }
      if (button.dataset.action === "rebuy-remove") {
        if (player.rebuys > 0) {
          player.rebuys -= 1;
          if (Array.isArray(player.rebuyEvents) && player.rebuyEvents.length > 0) player.rebuyEvents.pop();
        }
      }
      if (button.dataset.action === "addon-add" && !isEliminated) {
        if (state.addonLimit <= 0 || player.addons < state.addonLimit) {
          player.addons += 1;
          (player.addonEvents = player.addonEvents || []).push({ ...captureEventContext(player), playerName: player.name, playerId: player.id });
        }
      }
      if (button.dataset.action === "addon-remove") {
        if (player.addons > 0) {
          player.addons -= 1;
          if (Array.isArray(player.addonEvents) && player.addonEvents.length > 0) player.addonEvents.pop();
        }
      }
      if (button.dataset.action === "eliminate" && !isEliminated) {
        if (typeof computeSecondsRemainingFromClock === "function") computeSecondsRemainingFromClock();
        const level = state.levels[state.currentLevelIndex];
        const levelDuration = level ? level.duration : 0;
        const secondsRemaining = typeof state.secondsRemaining === "number" ? state.secondsRemaining : 0;
        player.eliminated = true;
        player.eliminatedAt = Date.now();
        player.eliminatedLevel = state.currentLevelIndex + 1;
        player.eliminatedLevelDuration = levelDuration;
        player.eliminatedSecondsRemaining = secondsRemaining;
        const totalPlayers = state.players.length;
        const eliminatedCount = state.players.filter((p) => p.eliminated).length;
        player.eliminatedRank = totalPlayers - eliminatedCount + 1;
        if (eliminatedCount === totalPlayers - 1) {
          const champion = state.players.find((p) => !p.eliminated);
          if (champion) {
            champion.champion = true;
            if (typeof computeSecondsRemainingFromClock === "function") computeSecondsRemainingFromClock();
            const level = state.levels[state.currentLevelIndex];
            const levelDuration = level ? level.duration : 0;
            const secondsRemaining = typeof state.secondsRemaining === "number" ? state.secondsRemaining : 0;
            const ts = Date.now();
            state.championEvent = {
              type: "champion",
              typeLabel: "Campeão",
              playerName: champion.name,
              level: state.currentLevelIndex + 1,
              levelDuration,
              secondsRemaining,
              timestamp: ts,
            };
            state.tournamentEndEvent = {
              type: "tournament-end",
              typeLabel: "Encerramento do torneio",
              level: state.currentLevelIndex + 1,
              levelDuration,
              secondsRemaining,
              timestamp: ts,
            };
            pauseClock();
          }
        }
      }
      renderPlayers();
      renderRebuyList();
      renderEvents();
      renderPayouts();
      updateSummary();
      saveState();
    });

  if (elements.addExpense) {
    elements.addExpense.addEventListener("click", () => {
      if (state.expensesMode === "add") {
        state.expensesMode = null;
        elements.addExpense.classList.remove("btn-active");
        renderPayouts();
        return;
      }
      if (elements.prizeFields) {
        elements.prizeFields.classList.add("hidden");
      }
      if (elements.editExpenses) elements.editExpenses.classList.remove("btn-active");
      if (elements.togglePrize) elements.togglePrize.classList.remove("btn-active");
      elements.addExpense.classList.add("btn-active");
      state.expenses = state.expenses.filter((expense) => expense.saved !== false);
      state.expenses.push({
        id: crypto.randomUUID(),
        name: "",
        value: 0,
        saved: false,
      });
      state.expensesMode = "add";
      renderPayouts();
      saveState();
    });
  }

  if (elements.editExpenses) {
    elements.editExpenses.addEventListener("click", () => {
      if (elements.prizeFields) {
        elements.prizeFields.classList.add("hidden");
      }
      state.expensesMode = state.expensesMode === "edit" ? null : "edit";
      if (state.expensesMode === "edit") {
        elements.editExpenses.classList.add("btn-active");
        if (elements.addExpense) elements.addExpense.classList.remove("btn-active");
        if (elements.togglePrize) elements.togglePrize.classList.remove("btn-active");
      } else {
        elements.editExpenses.classList.remove("btn-active");
      }
      renderPayouts();
    });
  }

  if (elements.togglePrize && elements.prizeFields) {
    elements.togglePrize.addEventListener("click", () => {
      if (!elements.prizeFields.classList.contains("hidden")) {
        elements.prizeFields.classList.add("hidden");
        elements.togglePrize.classList.remove("btn-active");
        return;
      }
      state.prizeSaved = false;
      state.expensesMode = null;
      elements.expensesList.innerHTML = "";
      elements.prizeFields.classList.remove("hidden");
      elements.togglePrize.classList.add("btn-active");
      if (elements.addExpense) elements.addExpense.classList.remove("btn-active");
      if (elements.editExpenses) elements.editExpenses.classList.remove("btn-active");
    });
  }

  if (elements.prizeWinners) {
    elements.prizeWinners.addEventListener("change", (event) => {
      state.prizeWinners = Math.max(0, Number(event.target.value || 0));
      state.prizeSplits = [];
      state.prizeAmounts = [];
      state.prizeSaved = false;
      renderPrizeRows();
      saveState();
    });
  }

  if (elements.tablesCount) {
    elements.tablesCount.addEventListener("change", (event) => {
      if (state.tablesLocked) {
        event.preventDefault();
        elements.tablesCount.value = String(state.tablesCount);
        return;
      }
      state.tablesCount = Math.max(1, Math.min(3, Number(event.target.value || 1)));
      if (elements.tablesActions) {
        elements.tablesActions.classList.toggle("hidden", !state.tablesCount);
      }
      state.players = state.players.map((player) => ({
        ...player,
        tableNumber: Number(player.tableNumber) > state.tablesCount ? null : player.tableNumber,
        tableSeat: Number(player.tableNumber) > state.tablesCount ? null : player.tableSeat,
      }));
      state.tablesMode = null;
      if (elements.manualTables) elements.manualTables.classList.remove("btn-active");
      if (elements.randomTables) elements.randomTables.classList.remove("btn-active");
      if (elements.viewTables) elements.viewTables.classList.remove("btn-active");
      if (elements.transferTables) elements.transferTables.classList.remove("btn-active");
      if (elements.transferFields) elements.transferFields.classList.add("hidden");
      renderTablesList();
      saveState();
    });
  }

  if (elements.saveTablesCount) {
    elements.saveTablesCount.addEventListener("click", () => {
      state.tablesLocked = true;
      if (elements.tablesCount) elements.tablesCount.disabled = true;
      saveState();
    });
  }

  if (elements.editTablesCount) {
    elements.editTablesCount.addEventListener("click", () => {
      state.tablesLocked = false;
      if (elements.tablesCount) elements.tablesCount.disabled = false;
      saveState();
    });
  }

  if (elements.manualTables) {
    elements.manualTables.addEventListener("click", () => {
      if (state.tablesMode === "manual") {
        state.tablesMode = null;
        elements.manualTables.classList.remove("btn-active");
        renderTablesList();
        return;
      }
      state.tablesMode = "manual";
      elements.manualTables.classList.add("btn-active");
      if (elements.randomTables) elements.randomTables.classList.remove("btn-active");
      if (elements.viewTables) elements.viewTables.classList.remove("btn-active");
      if (elements.transferTables) elements.transferTables.classList.remove("btn-active");
      if (elements.transferFields) elements.transferFields.classList.add("hidden");
      if (elements.transferList) {
        elements.transferList.classList.add("hidden");
        elements.transferList.innerHTML = "";
      }
      renderTablesList();
      saveState();
    });
  }

  if (elements.randomTables) {
    elements.randomTables.addEventListener("click", () => {
      if (state.tablesMode === "random") {
        state.tablesMode = null;
        elements.randomTables.classList.remove("btn-active");
        renderTablesList();
        return;
      }
      const proceed = window.confirm("Um novo sorteio sera realizado e o anterior sera perdido. Deseja continuar?");
      if (!proceed) return;
      state.tablesMode = "random";
      elements.randomTables.classList.add("btn-active");
      if (elements.manualTables) elements.manualTables.classList.remove("btn-active");
      if (elements.viewTables) elements.viewTables.classList.remove("btn-active");
      if (elements.transferTables) elements.transferTables.classList.remove("btn-active");
      if (elements.transferFields) elements.transferFields.classList.add("hidden");
      if (elements.transferList) {
        elements.transferList.classList.add("hidden");
        elements.transferList.innerHTML = "";
      }
      state.tableChipAdjustments = {};
      const players = [...state.players];
      for (let i = players.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
      }
      const tablesCount = Math.max(1, Number(state.tablesCount || 1));
      const baseSize = Math.floor(players.length / tablesCount);
      const extra = players.length % tablesCount;
      let cursor = 0;
      state.players.forEach((player) => {
        player.tableNumber = null;
        player.tableSeat = null;
      });
      for (let table = 1; table <= tablesCount; table += 1) {
        const size = baseSize + (table <= extra ? 1 : 0);
        for (let i = 0; i < size; i += 1) {
          if (!players[cursor]) break;
          players[cursor].tableNumber = table;
          players[cursor].tableSeat = i + 1;
          cursor += 1;
        }
      }
      renderPlayers();
      renderRebuyList();
      renderTablesList();
      saveState();
    });
  }

  if (elements.viewTables) {
    elements.viewTables.addEventListener("click", () => {
      if (state.tablesMode === "view") {
        state.tablesMode = null;
        elements.viewTables.classList.remove("btn-active");
        renderTablesList();
        return;
      }
      state.tablesMode = "view";
      elements.viewTables.classList.add("btn-active");
      if (elements.manualTables) elements.manualTables.classList.remove("btn-active");
      if (elements.randomTables) elements.randomTables.classList.remove("btn-active");
      if (elements.transferTables) elements.transferTables.classList.remove("btn-active");
      if (elements.transferFields) elements.transferFields.classList.add("hidden");
      if (elements.transferList) {
        elements.transferList.classList.add("hidden");
        elements.transferList.innerHTML = "";
      }
      renderTablesList();
      saveState();
    });
  }

  if (elements.transferTables) {
    elements.transferTables.addEventListener("click", () => {
      if (elements.transferFields && !elements.transferFields.classList.contains("hidden")) {
        elements.transferFields.classList.add("hidden");
        elements.transferTables.classList.remove("btn-active");
        state.tablesMode = null;
        if (elements.transferList) {
          elements.transferList.classList.add("hidden");
          elements.transferList.innerHTML = "";
        }
        return;
      }
      state.tablesMode = "transfer";
      elements.transferTables.classList.add("btn-active");
      if (elements.manualTables) elements.manualTables.classList.remove("btn-active");
      if (elements.randomTables) elements.randomTables.classList.remove("btn-active");
      if (elements.viewTables) elements.viewTables.classList.remove("btn-active");
      if (elements.transferFields) elements.transferFields.classList.remove("hidden");
      if (elements.transferSource) {
        const options = [];
        options.push(`<option value="">Selecione a mesa</option>`);
        for (let i = 1; i <= state.tablesCount; i += 1) {
          options.push(`<option value="${i}">Mesa ${String(i).padStart(2, "0")}</option>`);
        }
        elements.transferSource.innerHTML = options.join("");
        elements.transferSource.value = "";
      }
      renderTablesList();
    });
  }

  if (elements.transferSource) {
    elements.transferSource.addEventListener("change", () => {
      renderTransferList();
    });
  }

  if (elements.createFinalTable) {
    elements.createFinalTable.addEventListener("click", () => {
      const activePlayers = state.players.filter((player) => !player.eliminated);
      if (activePlayers.length === 0) {
        window.alert("Nao ha participantes ativos para a mesa final.");
        return;
      }
      const proceed = window.confirm(
        `Sera criada a mesa final e ${activePlayers.length} participantes serao transferidos. Deseja continuar?`
      );
      if (!proceed) return;
      const shuffleSeats = window.confirm("Deseja que o sistema sorteie as posicoes dos jogadores?");
      const finalPlayers = [...activePlayers];
      if (shuffleSeats) {
        for (let i = finalPlayers.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [finalPlayers[i], finalPlayers[j]] = [finalPlayers[j], finalPlayers[i]];
        }
      }
      const totalBaseChips =
        (state.buyinChips * state.players.filter((p) => p.paid).length)
        + (state.rebuyChips * state.players.reduce((sum, p) => sum + p.rebuys, 0))
        + (state.addonChips * state.players.reduce((sum, p) => sum + p.addons, 0));
      const adjustments = {};
      for (let table = 1; table <= state.tablesCount; table += 1) {
        adjustments[table] = -getTableBaseChips(table);
      }
      adjustments[99] = totalBaseChips - getTableBaseChips(99);
      state.tableChipAdjustments = adjustments;
      finalPlayers.forEach((player, index) => {
        player.tableNumber = 99;
        player.tableSeat = index + 1;
      });
      if (typeof computeSecondsRemainingFromClock === "function") computeSecondsRemainingFromClock();
      const level = state.levels[state.currentLevelIndex];
      const levelDuration = level ? level.duration : 0;
      const secondsRemaining = typeof state.secondsRemaining === "number" ? state.secondsRemaining : 0;
      const participantsSummary = finalPlayers.map((p) => p.name).join(", ");
      state.finalTableEvent = {
        type: "final-table",
        typeLabel: "Mesa Final",
        level: state.currentLevelIndex + 1,
        levelDuration,
        secondsRemaining,
        timestamp: Date.now(),
        participantsSummary,
      };
      renderPlayers();
      renderRebuyList();
      renderEvents();
      renderTablesList();
      saveState();
    });
  }

  if (elements.tablesList) {
    elements.tablesList.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      if (button.dataset.action !== "assign-table") return;
      const playerId = button.dataset.id;
      const tableNumber = Number(button.dataset.table || 0);
      const player = state.players.find((item) => item.id === playerId);
      if (!player) return;
      player.tableNumber = tableNumber || null;
      player.tableSeat = player.tableNumber ? 1 : null;
      renderPlayers();
      renderRebuyList();
      renderTablesList();
      saveState();
    });
  }

  if (elements.transferList) {
    elements.transferList.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      if (button.dataset.action !== "transfer-player") return;
      const row = button.closest(".row");
      if (!row) return;
      const chipsInput = row.querySelector('input[data-action="transfer-chips"]');
      const select = row.querySelector('select[data-action="transfer-target"]');
      const confirmBtn = row.querySelector('button[data-action="confirm-transfer"]');
      if (chipsInput) chipsInput.classList.toggle("hidden");
      if (select) select.classList.toggle("hidden");
      if (confirmBtn) confirmBtn.classList.toggle("hidden");
    });

    elements.transferList.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      if (button.dataset.action !== "confirm-transfer") return;
      const row = button.closest(".row");
      if (!row) return;
      const playerId = button.dataset.id;
      const select = row.querySelector('select[data-action="transfer-target"]');
      const tableNumber = select ? Number(select.value || 0) : 0;
      if (!playerId || !tableNumber) {
        window.alert("Selecione a mesa destino.");
        return;
      }
      const sourceTable = Number(elements.transferSource?.value || 0);
      if (!sourceTable) {
        window.alert("Selecione a mesa de origem.");
        return;
      }
      if (tableNumber === sourceTable) {
        window.alert("A mesa destino deve ser diferente da mesa de origem.");
        return;
      }
      const player = state.players.find((item) => item.id === playerId);
      if (!player) return;
      const chipsInput = row.querySelector('input[data-action="transfer-chips"]');
      const amount = chipsInput ? parseNumber(chipsInput.value) : 0;
      if (!amount || amount <= 0) {
        window.alert("Informe a quantidade de fichas para transferir.");
        return;
      }
      const adjustments = state.tableChipAdjustments || {};
      const available = getTableBaseChips(sourceTable) + Number(adjustments[sourceTable] || 0);
      if (amount > available) {
        window.alert("A quantidade de fichas a transferir e maior do que a disponivel na mesa.");
        return;
      }
      const basePlayerChips = getPlayerBaseChips(player);
      adjustments[sourceTable] = Number(adjustments[sourceTable] || 0) + (basePlayerChips - amount);
      adjustments[tableNumber] = Number(adjustments[tableNumber] || 0) + (amount - basePlayerChips);
      state.tableChipAdjustments = adjustments;
      if (typeof computeSecondsRemainingFromClock === "function") computeSecondsRemainingFromClock();
      const level = state.levels[state.currentLevelIndex];
      const levelDuration = level ? level.duration : 0;
      const secondsRemaining = typeof state.secondsRemaining === "number" ? state.secondsRemaining : 0;
      (state.transferEvents = state.transferEvents || []).push({
        playerName: player.name,
        sourceTable,
        targetTable: tableNumber,
        chips: amount,
        level: state.currentLevelIndex + 1,
        levelDuration,
        secondsRemaining,
        timestamp: Date.now(),
      });
      player.tableNumber = tableNumber;
      player.tableSeat = null;
      if (chipsInput) chipsInput.classList.add("hidden");
      if (select) select.classList.add("hidden");
      if (button) button.classList.add("hidden");
      renderEvents();
      renderPlayers();
      renderRebuyList();
      renderTablesList();
      saveState();
    });

    elements.transferList.addEventListener("input", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (target.dataset.action !== "transfer-chips") return;
      const raw = target.value.replace(/[^\d]/g, "");
      const value = raw.padStart(3, "0");
      const integerPart = value.slice(0, -2);
      const decimalPart = value.slice(-2);
      const formatted = `${Number(integerPart).toLocaleString("pt-BR")},${decimalPart}`;
      target.value = formatted;
    });

    elements.transferList.addEventListener("blur", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (target.dataset.action !== "transfer-chips") return;
      const rawValue = target.value.trim();
      if (!rawValue) {
        target.value = "0,00";
      } else if (!rawValue.includes(",")) {
        const digits = rawValue.replace(/[^\d]/g, "");
        const value = digits.padStart(3, "0");
        const integerPart = value.slice(0, -2);
        const decimalPart = value.slice(-2);
        target.value = `${Number(integerPart).toLocaleString("pt-BR")},${decimalPart}`;
      }
    }, true);

    elements.transferList.addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLSelectElement)) return;
      if (target.dataset.action !== "transfer-target") return;
      // Apenas seleciona a mesa destino; a confirmação é feita pelo botão "Confirmar"
    });
  }

  if (elements.expensesList) {
    elements.expensesList.addEventListener("input", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      const expenseId = target.dataset.id;
      const field = target.dataset.expenseField;
      if (!expenseId || !field) return;
      const expense = state.expenses.find((item) => item.id === expenseId);
      if (!expense) return;
      if (field === "name") {
        const upperValue = target.value.toUpperCase();
        target.value = upperValue;
        expense.name = upperValue;
      }
      if (field === "value") {
        expense.value = parseNumber(target.value);
      }
    });

    elements.expensesList.addEventListener("focusout", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (target.dataset.expenseField !== "value") return;
      target.value = formatNumber(parseNumber(target.value));
    });

    elements.expensesList.addEventListener("keydown", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (event.key !== "Enter") return;
      const expenseId = target.dataset.id;
      if (!expenseId) return;
      event.preventDefault();
      const expense = state.expenses.find((item) => item.id === expenseId);
      if (!expense) return;
      expense.saved = true;
      state.expensesMode = null;
      if (elements.addExpense) elements.addExpense.classList.remove("btn-active");
      saveState();
      renderPayouts();
    });

    elements.expensesList.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      if (button.dataset.action !== "save-expense") return;
      const expenseId = button.dataset.id;
      const expense = state.expenses.find((item) => item.id === expenseId);
      if (!expense) return;
      expense.saved = true;
      state.expensesMode = null;
      if (elements.addExpense) elements.addExpense.classList.remove("btn-active");
      saveState();
      renderPayouts();
    });

    elements.expensesList.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      if (button.dataset.action !== "remove-expense") return;
      const expenseId = button.dataset.id;
      state.expenses = state.expenses.filter((item) => item.id !== expenseId);
      renderPayouts();
      saveState();
    });
  }

  if (elements.prizeList) {
    elements.prizeList.addEventListener("input", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (target.dataset.prizeField !== "percent") return;
      const index = Number(target.dataset.index || 0);
      const rawValue = sanitizeIntegerInput(target.value);
      const value = Math.min(100, Math.max(0, Number(rawValue || 0)));
      const otherTotal = state.prizeSplits.reduce((sum, current, currentIndex) => (
        currentIndex === index ? sum : sum + Number(current || 0)
      ), 0);
      const allowed = Math.max(0, 100 - otherTotal);
      const finalValue = Math.min(value, allowed);
      target.value = String(finalValue);
      state.prizeSplits[index] = finalValue;
      state.prizeAmounts = state.prizeAmounts.map(() => 0);
      state.prizeSaved = false;
      saveState();
    });

    elements.prizeList.addEventListener("focusin", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (target.dataset.prizeField !== "percent") return;
      target.value = sanitizeIntegerInput(target.value);
      target.select();
    });

    elements.prizeList.addEventListener("blur", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (target.dataset.prizeField !== "percent") return;
      const rawValue = sanitizeIntegerInput(target.value);
      const value = Math.min(100, Math.max(0, Number(rawValue || 0)));
      target.value = `${value}%`;
    }, true);

    elements.prizeList.addEventListener("keydown", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (target.dataset.prizeField !== "percent") return;
      if (event.key !== "Enter") return;
      event.preventDefault();
      const inputs = Array.from(elements.prizeList.querySelectorAll('input[data-prize-field="percent"]'));
      const index = inputs.indexOf(target);
      if (index >= 0 && index < inputs.length - 1) {
        inputs[index + 1].focus();
        inputs[index + 1].select();
      } else if (elements.calculatePrizes) {
        elements.calculatePrizes.click();
      }
    });
  }

  if (elements.clearPrizes) {
    elements.clearPrizes.addEventListener("click", () => {
      state.prizeSplits = [];
      state.prizeAmounts = [];
      state.prizeSaved = false;
      state.prizeWinners = 0;
      if (elements.prizeWinners) {
        elements.prizeWinners.value = "";
      }
      renderPrizeRows();
      renderPayouts();
      saveState();
    });
  }

  if (elements.calculatePrizes) {
    elements.calculatePrizes.addEventListener("click", () => {
      const paidCount = state.players.filter((player) => player.paid).length;
      const totalRebuys = state.players.reduce((sum, player) => sum + player.rebuys, 0);
      const totalAddons = state.players.reduce((sum, player) => sum + player.addons, 0);
      const totalCollected = (state.buyinValue * paidCount)
        + (state.rebuyValue * totalRebuys)
        + (state.addonValue * totalAddons);
      const expenses = Array.isArray(state.expenses) ? state.expenses : [];
      const savedExpenses = expenses.filter((expense) => expense.saved !== false);
      const totalExpenses = savedExpenses.reduce((sum, expense) => sum + Number(expense.value || 0), 0);
      const net = Math.max(0, totalCollected - totalExpenses);
      state.prizeAmounts = computePrizeAmounts(net, state.prizeSplits);
      renderPrizeRows();
      saveState();
    });
  }

  if (elements.savePrizes) {
    elements.savePrizes.addEventListener("click", () => {
      const paidCount = state.players.filter((player) => player.paid).length;
      const totalRebuys = state.players.reduce((sum, player) => sum + player.rebuys, 0);
      const totalAddons = state.players.reduce((sum, player) => sum + player.addons, 0);
      const totalCollected = (state.buyinValue * paidCount)
        + (state.rebuyValue * totalRebuys)
        + (state.addonValue * totalAddons);
      const expenses = Array.isArray(state.expenses) ? state.expenses : [];
      const savedExpenses = expenses.filter((expense) => expense.saved !== false);
      const totalExpenses = savedExpenses.reduce((sum, expense) => sum + Number(expense.value || 0), 0);
      const net = Math.max(0, totalCollected - totalExpenses);
      const winnersCount = Math.max(0, Number(state.prizeWinners || 0));
      if (!Array.isArray(state.prizeSplits) || state.prizeSplits.length !== winnersCount) {
        window.alert("Preencha todos os campos de porcentagem.");
        return;
      }
      const totalPercent = state.prizeSplits.reduce((sum, value) => sum + Number(value || 0), 0);
      if (totalPercent !== 100) {
        window.alert("A soma das porcentagens deve ser 100%.");
        return;
      }
      if (state.prizeSplits.some((value) => Number.isNaN(Number(value)) || Number(value) <= 0)) {
        window.alert("Preencha todas as porcentagens com valores válidos.");
        return;
      }
      if (!Array.isArray(state.prizeAmounts) || state.prizeAmounts.every((value) => Number(value || 0) === 0)) {
        state.prizeAmounts = computePrizeAmounts(net, state.prizeSplits);
      }
      state.prizeSaved = true;
      renderPrizeRows();
      renderPayouts();
      saveState();
    });
  }
}

}

function init() {
  loadState();
  loadHistory();
  loadHistoryRecords();
  initializeFormValues();
  updateClockDisplay();
  updateHomeView();
  renderLevels();
  renderPlayers();
  renderRebuyList();
  renderPayouts();
  renderHistoryRecords();
  renderStaticHistory();
  updateSummary();
  bindEvents();
  window.handleCommand = handleCommand;
  startSyncLoop();
  window.addEventListener("storage", (event) => {
    if (event.key !== COMMAND_KEY || !event.newValue) return;
    try {
      const payload = JSON.parse(event.newValue);
      handleCommand(payload);
      localStorage.removeItem(COMMAND_KEY);
    } catch (error) {
      console.warn("Comando invalido.");
    }
  });
  const urlParams = new URLSearchParams(window.location.search);
  const viewParam = urlParams.get("view");
  if (viewParam === "tables") setView("tables");
  else if (viewParam === "rebuy") setView("rebuy");
  if (state.clockRunning && state.levelEndTs) {
    clockInterval = setInterval(tickClock, 1000);
  } else if (state.clockRunning) {
    startClock();
  }
}

init();
