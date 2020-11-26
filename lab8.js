console.log('Hello World');
//Grant Hunter IS350 Lab 8
//Question 1:

let programmingLanguages = ['Python','JAVA','PHP','C#','C++','SQL'];
let databaseTechnologies = ['MySQL','SQL','SQLite','Oracle','DB2','SQL Server'];
console.log('Programming Languages: '+programmingLanguages);
console.log('Database Technologies: '+databaseTechnologies);

programmingLanguages.forEach(programmingItem =>{
	databaseTechnologies.forEach(databaseItem =>{
		if (programmingItem == databaseItem){console.log('"'+databaseItem+'" is in both lists.')}
	});
});

//Question 2

let gradeVals = [70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,
85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
var message;
function getEvens(num){
	if (num % 2 === 0){
		console.log(num +':'+message);

	if (num <=83){message='Below average'}
		else if (num <=88){message='Grade B'}
			else if(num <=93){message='Grade AB'}
				else{message='Grade A'};
	}
}

gradeVals.forEach(getEvens);