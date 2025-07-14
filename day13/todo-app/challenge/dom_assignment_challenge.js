// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");
const taskCount = document.getElementById("taskCount");
const prioritySelect = document.getElementById("priority");

// 할 일 개수 업데이트 함수
function updateTaskCount() {
    // .task-item의 개수로 계산
    const count = document.querySelectorAll(".task-item").length;
    taskCount.textContent = "현재 할 일: " + count + "개";
}

// 입력값 검증 및 할 일 추가 함수
function addTask() {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    // 입력값이 비어있는지 확인
    if (taskText === "") {
        alert("할 일을 입력해주세요!");
        return;
    }

    // 새로운 리스트 아이템 생성
    const li = document.createElement("li");
    li.className = "task-item";

    // 할 일 텍스트 추가
    const span = document.createElement("span");
    span.textContent = taskText;

    // 우선순위에 따라 색상 적용
    if (priority === "high") {
        span.style.color = "red";
    }

    // 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-button";

    // 삭제 버튼 이벤트 리스너
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
        updateTaskCount();
    });

    // 완료 상태 토글 이벤트 리스너
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // 요소 조립
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // 할 일 개수 업데이트
    updateTaskCount();

    // 입력창 초기화
    taskInput.value = "";
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
    // ul에서 모든 li를 제거
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    updateTaskCount();
}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener("click", clearAllTasks);

// (도전) querySelectorAll로 삭제 버튼 이벤트 리스너 일괄 적용 예시 (한 번만 실행, 동적 추가 항목에는 X)
// 실제 앱에서는 동적으로 할 일이 추가되므로, 위와 같이 각 항목 생성 시 직접 이벤트 연결이 더 안정적임
function addDeleteButtonListeners() {
    const deleteButtons = document.querySelectorAll(".delete-button");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function (event) {
            // 삭제 버튼의 부모 li 제거
            const li = event.target.parentNode;
            taskList.removeChild(li);
            updateTaskCount();
        });
    }
}

// 초기 할 일 개수 표시
updateTaskCount();
