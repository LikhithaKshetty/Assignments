package Question3b;
import java.util.*;
public class Locality {
	String name;
    static int colgate;
    static int pepsodent;
    static int patanjali;
    static int dabur;
    static String ans="same values";
    int ch,m;
    static int countc,countm,countw;
    int memberType;
    String type;
    Scanner scan = new Scanner(System.in);



   public Locality() {
        System.out.println("Enter Your Name");
        this.name=scan.next();
        System.out.println("Type 1 for children or 2 for men or 3 for women");
        this.memberType=scan.nextInt();
        if(memberType==1) {
            this.type="children";
            countc++;
            System.out.println("enter which 1 for colgate 2 for pepsodent 3 for patanjali 4 for dabur");
            ch=scan.nextInt();
            Which(ch);
        }
        if(memberType==3) {
            this.type="women";
            countw++;
            System.out.println("enter which 1 for colgate 2 for pepsodent 3 for patanjali 4 for dabur");
            ch=scan.nextInt();
            Which(ch);
        }
        if(memberType==2) {
            this.type="men";
            countm++;
            System.out.println("enter which 1 for colgate 2 for pepsodent 3 for patanjali 4 for dabur");
            ch=scan.nextInt();
            Which(ch);
        }}
    public void Which(int ch) {
        switch(ch) {
        case 1: colgate++;
        break;
        case 2: pepsodent++;
        break;
        case 3: patanjali++;
        break;
        case 4: dabur++;
        break;
        }
    }



   public static String countMembers() {
        if(colgate>pepsodent && colgate>patanjali && colgate>dabur) {
            ans="max is colgate";
        }
        if(pepsodent>colgate && pepsodent>patanjali && pepsodent>dabur) {
            ans="max is pepsodent";
        }
        if(patanjali>colgate && patanjali>pepsodent && patanjali>dabur) {
            ans="max is patanjali";
        }
        if(dabur>colgate && dabur>patanjali && dabur>pepsodent) {
            ans="max is dabur";
        }



return "Number of children: "+countc+"\nNumber of women: "+countw+"\nNumber of men: "+countm+"\ncol: "+colgate+"\npep: "+pepsodent+"\npat: "+patanjali+"\ndab: "+dabur+"\nmaximum is :"+ans;
}}


