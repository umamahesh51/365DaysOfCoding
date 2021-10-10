package Day23;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;
public class Trie {
    private Node root;
    Trie(){
        root = new Node();
    }
    class Node{
        boolean isWord;
        Node[] chars;
        Node(){
            isWord = false;
            chars = new Node[26];
        }
    public void makeWord(){
            isWord = true;
        }
    }
    public boolean insertWord(String word){
        int n = word.length();
        Node curr = root;
        try{
        for(int i=0; i<n; i++){
            char c = word.charAt(i);
            int nextIndex = c - 'a';
            if(curr.chars[nextIndex]==null){
                curr.chars[nextIndex] = new Node();
            }
            curr = curr.chars[nextIndex];
        }
        if(curr.isWord){
            return false;
        }
        curr.makeWord();
    }catch(Exception e){
        System.out.println("Wprd: " + word +" " +e.getMessage());
        return false;
    }
        return true;
    }
    public boolean search(String word){
        int n = word.length();
        Node curr = root;
        try{
            for(int i=0; i<n; i++){
                char c = word.charAt(i);
            int nextIndex = c - 'a';
            if(curr.chars[nextIndex]==null){
                return false;
            }
            curr = curr.chars[nextIndex];
        }
    }
    catch(Exception e){
        System.out.println(e.getMessage());
        return false;
    }
        return curr!=null && curr.isWord;
    }
    public Set<String> getSuggestions(String prefix){
        Set<String> suggestions = new HashSet<String>();
        int n = prefix.length();
        Node curr = root;
        try{
            for(int i=0; i<n; i++){
                char c = prefix.charAt(i);
            int nextIndex = c - 'a';
            if(curr.chars[nextIndex]==null){
                return new HashSet<>();
            }
            curr = curr.chars[nextIndex];
        }
        return suggestions;
}
    public static void main(String[] args) {
        Trie trie = new Trie();
        InputStream resourceAsStream = Trie.class.getResourceAsStream("./words.txt");
        BufferedReader reader = new BufferedReader(new InputStreamReader(resourceAsStream));
        String line = null;
        try{
        while((line = reader.readLine()) !=null){
            line = line.trim().toLowerCase();
            if(isValid(line)){
                trie.insertWord(line);
            }
        }
    }catch(Exception e){ 
        System.out.println(e.getMessage());
    }
    System.out.println(trie.search("aargau"));
    System.out.println(trie.search("argau"));
    }
    public static boolean isValid(String word){
        for(int i=0; i<word.length(); i++){
            int value = word.charAt(i)-'a';
            if(value < 0 || value >25){
                return false;
            }
        }
            return true;
        }
}
