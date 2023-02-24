

const myModule = (function() {
    
    const privateVariable = 'Hello World';

    function privateMethod() {
        console.log(privateVariable);
    }
    return {
        publicMethod: function() {
        privateMethod();
        }
    }
    
})();

myModule.publicMethod();




const myRevealingModule = (function() {

    let privateVar = 'Peter';
    const publicVar  = 'Hello World';

    function privateFunction() {
        console.log('Name: '+ privateVar);
    }

    function publicSetName(name) {
        privateVar = name;
    }
    function publicGetName() {
        privateFunction();
    }

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
})();

myRevealingModule.setName('Mark');
myRevealingModule.getName();




const showSwal = (function() {

    let creatorName = "User";
    let executorsFio = "Pavel, Andrei, Mark";
    let content = "<p>Выполнить задачу 1</p>";
    let deadline = "22.02.2023 18:00:00";

    function privateMethod() {
        Swal.fire({
            width: modalTaskWidth,
            title: title,
            html:
                `
                    <div class="modal-task-body new">
                        <div class="creator modal-task-block">
                            <p class="modal-task-subtitle">Кем поставлена</p>
                            <p class="creator-fio modal-task-text">${creatorName}</p>
                        </div>
                        <div class="executors modal-task-block">
                            <p class="modal-task-subtitle">Испольнитель(-и)</p>
                            <p class="executor-fio modal-task-text">${executorsFio}</p>
                        </div>
                        <div class="content modal-task-block">
                            <p class="modal-task-subtitle">Содержание задачи</p>
                            <div class="content-body">${content}</div>
                        </div>
                        <div class="deadline modal-task-block">
                            <p class="modal-task-subtitle">Срок выполнения</p>
                            <div class="deadline-text modal-task-text">${deadline}</div>
                        </div>
                    </div>
                `,
            showCloseButton: true,
            confirmButtonText: 'Закрыть',
        })
    }
    
    function publicSetCreatorName (name) {
        creatorName = name;
    }

    function setExecutorsFio (executors) {
        executorsFio = executors;

    }

    function setContent (newContent) {
        content = newContent;
    }

    function setDeadline(newDeadline) {
        deadline = newDeadline;
    }

    return {
        setCreatorName: publicSetCreatorName,
        showTask: privateMethod,
    };
    
})




























