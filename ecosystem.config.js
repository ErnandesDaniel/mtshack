module.exports = {

	apps:[{
	  
		name:'searchBot',
			
		script:'./dist/main.js',
		
		env:{
			
			NODE_ENV: "development",
		
		},
		
		env_production:{
			
			NODE_ENV: "production",
		
		},

		out_file: "./out.log",
		
		error_file: "./error.log",	
		
		log_date_format: "DD-MM HH:mm:ss Z",
		
		log_type: "json",
		
		merge_logs:true ,
		
		//Перезапуск приложения при достижении им определенного потребления памяти
		max_memory_restart: '2000M',
		
		//Перезапуск приложения каждую 30-ую минуту часа
		
		// /:косая черта используется для определения интервала шага. 
		//Например, */30 * * * *определяет задание, которое будет повторяться каждые 30 минут.
		
		cron_restart: '*/30 * * * *',
	
	}]
  
}
