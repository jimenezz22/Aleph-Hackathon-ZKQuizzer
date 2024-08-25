// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QuizManager {
    struct Question {
        string questionText;
        string[] options;
        uint correctOptionIndex;
    }

    // Mapeo de ID de pregunta a la pregunta
    mapping(uint => Question) public questions;
    uint public questionCount;

    // Evento cuando se añade una nueva pregunta
    event QuestionAdded(uint questionId, string questionText);

    // Añadir una nueva pregunta
    function addQuestion(
        string memory _questionText,
        string[] memory _options,
        uint _correctOptionIndex
    ) public {
        require(_correctOptionIndex < _options.length, "Índice de opción incorrecto");

        questionCount++;
        questions[questionCount] = Question({
            questionText: _questionText,
            options: _options,
            correctOptionIndex: _correctOptionIndex
        });

        emit QuestionAdded(questionCount, _questionText);
    }

    // Obtener detalles de una pregunta
    function getQuestion(uint _questionId) public view returns (string memory, string[] memory, uint) {
        Question memory q = questions[_questionId];
        return (q.questionText, q.options, q.correctOptionIndex);
    }
}
