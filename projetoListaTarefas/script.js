;(function(){
    'use strict'

    var tasker = {
        init: function(){
            this.cacheDom()
            this.bindEvents()
            this.evalTasklist()
        },
        cacheDom: function(){
            this.taskInput = document.getElementById("entrada-tarefa")
            this.addBtn = document.getElementById("adicionar-tarefa-btn")
            this.tasklist = document.getElementById("tarefas")
            this.tasklistChildren = this.tasklist.children
            this.errorMessage = document.getElementById("erro")
        },
        bindEvents: function(){
            this.addBtn.onclick = this.addTask.bind(this)
            this.taskInput.onkeypress = this.enterKey.bind(this)
        },
        evalTasklist: function (){
            var i, chkBox, delBtn;
            //bind click eventos
            for(i = 0; i < this.tasklistChildren.length; i++){
                //adicionar evento a checkbox
                chkBox = this.tasklistChildren[i].getElementsByTagName("input")[0]
                chkBox.onclick = this.completeTask.bind(this, this.tasklistChildren[i], chkBox)
                //adicionar evento para deletar
                delBtn = this.tasklistChildren[i].getElementsByTagName("button")[0]
                delBtn.onclick = this.delTask.bind(this, i)
            }
        },
        render: function(){
            var taskLi, taskChkbx, taskVal, taskBtn, taskTrsh;
            //fazer html
            taskLi = document.createElement("li")
            taskLi.setAttribute("class","tarefa")
            //checkBox
            taskChkbx = document.createElement("input")
            taskChkbx.setAttribute("type","checkbox")
            //u
            taskVal = document.createTextNode(this.taskInput.value)
            //delete btn
            taskBtn = document.createElement("button")
            //Lixo
            taskTrsh = document.createElement("i")
            taskTrsh.setAttribute("class", "fa fa-trash")
            //inserir lixeira no button
            taskBtn.appendChild(taskTrsh)

            //colocando elementos na li
            taskLi.appendChild(taskChkbx)
            taskLi.appendChild(taskVal)
            taskLi.appendChild(taskBtn)

            //adicionar a task a lista
            this.tasklist.appendChild(taskLi)

        },
        completeTask: function(i, chkBox){
            if(chkBox.checked){
                i.className = "task completed"
            } else {
                this.incompleteTask(i)
            }
        },
        enterKey: function(event){
            if(event.keyCode === 13 || event.which === 13){
                this.addTask()
            }
        },
        addTask: function(){
            var value = this.taskInput.value
            this.errorMessage.style.display = "none"

            if(value == ""){
                this.error()
            } else{
                this.render()
                this.taskInput.value = ""
                this.evalTasklist()
            }
        },
        delTask: function(i){
            this.tasklist.children[i].remove()
            this.evalTasklist()
        },
        error: function(){
            this.errorMessage.style.display = "block"
        }

    }

    tasker.init()
})()