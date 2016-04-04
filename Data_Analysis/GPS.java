import java.io.*;

public class GPS{ 
	
  public static void main(String[] args)throws Exception{
	  
    String Latitude[] = new String[2500];
    String Longitude[] = new String[2500];
    String Code[] = new String[2500];
    String Altitude[] = new String[2500];
    String Date[] = new String[2500];
    String Year[] = new String[2500];
    String Month[] = new String[2500];
    String Day[] = new String[2500];
    String Hour[] = new String[2500];
    String Minute[] = new String[2500];
    String Second[] = new String[2500];
    double x=0;
    double y=0;
    double hour=0;
    double minute=0;
    double second=0;
    double day=0;
    double month=0;
    double year=0;
    double time=0;
    double varX,varY;
    double Distance[]= new double[2500];
    double avgSpeed[] = new double[2500];
    
    int num=0;
    int i=0;
    BufferedReader br = new BufferedReader(new FileReader("d:\\in.txt"));
    String s = br.readLine();
    while(s != null){
            System.out.println(s);
            String[] str = s.split(",");
            Latitude[i]	 = str[0];
            Longitude[i] = str[1];
            Code[i] = str[2];
            Altitude[i] = str[3];	
            Date[i] = str[4];
            Year[i] = str[5];
            Month[i] = str[6];
            Day[i] = str[7];
            Hour[i] = str[8];
            Minute[i] = str[9];
            Second[i] = str[10];
//calculate the distance: reference: http://blog.sciencenet.cn/blog-93124-623444.html
            varX=(Double.parseDouble(Longitude[i])-x)*85276;
            varY=(Double.parseDouble(Latitude[i])-y)*110940;
            x=Double.parseDouble(Longitude[i]);
            y=Double.parseDouble(Latitude[i]);
            Distance[i]=Math.sqrt(varX*varX+varY*varY);
           // System.out.println("dist :" + Distance[i]);
//calculate time            
            time=(Double.parseDouble(Year[i])-year)*3600*24*365+(Double.parseDouble(Month[i])-month)*3600*24*30+(Double.parseDouble(Day[i])-day)*3600*24+(Double.parseDouble(Hour[i])-hour)*3600+(Double.parseDouble(Minute[i])-minute)*60+(Double.parseDouble(Second[i])-second);
            year=(Double.parseDouble(Year[i]));
            month=(Double.parseDouble(Month[i]));
            day=(Double.parseDouble(Day[i]));
            hour=Double.parseDouble(Hour[i]);
            minute=Double.parseDouble(Minute[i]);
            second=Double.parseDouble(Second[i]);
           // System.out.println("TIME: "+time);
//calculate the avgSpeed
            avgSpeed[i]=Distance[i]/time;
           // System.out.println("avgSpeed: "+avgSpeed[i]);
            
            i++;
            s = br.readLine();
        }
    	num=i;
/*    	
        System.out.println("num :" + num);
        for(i=0;i<num;i++){
        //System.out.println("i: "+i);
        System.out.print(Latitude[i]+", ");
        System.out.print(Longitude[i]+", ");
        System.out.print(Code[i]+", ");
        System.out.print(Altitude[i]+", ");
        System.out.print(Date[i]+", ");
        System.out.print(Year[i]+", ");
        System.out.print(Month[i]+", ");
        System.out.print(Day[i]+", ");
        System.out.print(Hour[i]+", ");
        System.out.print(Minute[i]+", ");
        System.out.println(Second[i]+", ");     
        }
*/       
        br.close();      
        
      //  for(i=1;i<num;i++)
      //  	System.out.println(Distance[i]);
//write out starting from the 2nd data      
        BufferedWriter bw = new BufferedWriter( new FileWriter("d:\\out.txt"));
        for(i=1;i<num;i++){
        	bw.write(Latitude[i]);
        	bw.write(",");
        	bw.write(Longitude[i]);
        	bw.write(",");
        	bw.write(Code[i]);
        	bw.write(",");
        	bw.write(Altitude[i]);
        	bw.write(",");
        	bw.write(Date[i]);
        	bw.write(",");
        	bw.write(Year[i]);
        	bw.write(",");
        	bw.write(Month[i]);
        	bw.write(",");
        	bw.write(Day[i]);
        	bw.write(",");
            bw.write(Hour[i]);
            bw.write(",");
            bw.write(Minute[i]);
            bw.write(",");
            bw.write(Second[i]);
            bw.write(",");
/**/
        if(avgSpeed[i]<1)
        	bw.write("Stay");
        else if(avgSpeed[i]>1&&avgSpeed[i]<3)
        	bw.write("Walk");
        else if(avgSpeed[i]>3&&avgSpeed[i]<7)
        	bw.write("Bike");
        else if(avgSpeed[i]>7&&avgSpeed[i]<11)
        	bw.write("Bus");
        else if(avgSpeed[i]>11&&avgSpeed[i]<14)
        	bw.write("Car");
        else bw.write("Subway");
        
        bw.newLine();
        }
        bw.close();
    }
} 