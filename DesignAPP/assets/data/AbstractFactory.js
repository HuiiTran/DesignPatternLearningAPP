/* eslint-disable prettier/prettier */
import AbstractFactory from "../images/AbstractFactory/abstract-factory-en.png"
import Problem1 from "../images/AbstractFactory/problem-en.png"
import Problem2 from "../images/AbstractFactory/abstract-factory-comic-1-en.png"
import Solution1 from "../images/AbstractFactory/solution1.png"
import Solution2 from "../images/AbstractFactory/solution2.png"
import Solution3 from "../images/AbstractFactory/abstract-factory-comic-2-en.png"
import Structure1 from "../images/AbstractFactory/structure-indexed.png"
export const AbstractFactory_En = {
    Intent: [
        'Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.'
    ],
    Problem: [
        'Imagine that you’re creating a furniture shop simulator. Your code consists of classes that represent:',
        '1. A family of related products, say: Chair + Sofa + CoffeeTable.',
        '2. Several variants of this family. For example, products Chair + Sofa + CoffeeTable are available in these variants: Modern, Victorian, ArtDeco.',
        'You need a way to create individual furniture objects so that they match other objects of the same family. Customers get quite mad when they receive non-matching furniture.',
        'Also, you don’t want to change existing code when adding new products or families of products to the program. Furniture vendors update their catalogs very often, and you wouldn’t want to change the core code each time it happens.',
    ],
    Solution: [
        'The first thing the Abstract Factory pattern suggests is to explicitly declare interfaces for each distinct product of the product family (e.g., chair, sofa or coffee table). Then you can make all variants of products follow those interfaces. For example, all chair variants can implement the Chair interface; all coffee table variants can implement the CoffeeTable interface, and so on.',
        'The next move is to declare the Abstract Factory—an interface with a list of creation methods for all products that are part of the product family (for example, createChair, createSofa and createCoffeeTable). These methods must return abstract product types represented by the interfaces we extracted previously: Chair, Sofa, CoffeeTable and so on.',
        'Now, how about the product variants? For each variant of a product family, we create a separate factory class based on the AbstractFactory interface. A factory is a class that returns products of a particular kind. For example, the ModernFurnitureFactory can only create ModernChair, ModernSofa and ModernCoffeeTable objects.',
        'The client code has to work with both factories and products via their respective abstract interfaces. This lets you change the type of a factory that you pass to the client code, as well as the product variant that the client code receives, without breaking the actual client code.',
        'Say the client wants a factory to produce a chair. The client doesn’t have to be aware of the factory’s class, nor does it matter what kind of chair it gets. Whether it’s a Modern model or a Victorian-style chair, the client must treat all chairs in the same manner, using the abstract Chair interface. With this approach, the only thing that the client knows about the chair is that it implements the sitOn method in some way. Also, whichever variant of the chair is returned, it’ll always match the type of sofa or coffee table produced by the same factory object.',
        'There’s one more thing left to clarify: if the client is only exposed to the abstract interfaces, what creates the actual factory objects? Usually, the application creates a concrete factory object at the initialization stage. Just before that, the app must select the factory type depending on the configuration or the environment settings.',

    ],
    RealWorldAnalogy: [
        'The government is an excellent example of the Singleton pattern. A country can have only one official government. Regardless of the personal identities of the individuals who form governments, the title, “The Government of X”, is a global point of access that identifies the group of people in charge.'
    ],
    Structure:[
        '1. Abstract Products declare interfaces for a set of distinct but related products which make up a product family.',
        '2. Concrete Products are various implementations of abstract products, grouped by variants. Each abstract product (chair/sofa) must be implemented in all given variants (Victorian/Modern).',
        '3. The Abstract Factory interface declares a set of methods for creating each of the abstract products.',
        '4.Concrete Factories implement creation methods of the abstract factory. Each concrete factory corresponds to a specific variant of products and creates only those product variants.',
        '5. Although concrete factories instantiate concrete products, signatures of their creation methods must return corresponding abstract products. This way the client code that uses a factory doesn’t get coupled to the specific variant of the product it gets from a factory. The Client can work with any concrete factory/product variant, as long as it communicates with their objects via abstract interfaces.',
    ],
    Applicability: [
        'Use the Abstract Factory when your code needs to work with various families of related products, but you don’t want it to depend on the concrete classes of those products—they might be unknown beforehand or you simply want to allow for future extensibility.',
        'The Abstract Factory provides you with an interface for creating objects from each class of the product family. As long as your code creates objects via this interface, you don’t have to worry about creating the wrong variant of a product which doesn’t match the products already created by your app.',
        'Consider implementing the Abstract Factory when you have a class with a set of Factory Methods that blur its primary responsibility.',
        'In a well-designed program each class is responsible only for one thing. When a class deals with multiple product types, it may be worth extracting its factory methods into a stand-alone factory class or a full-blown Abstract Factory implementation.',
        'Inheritance is probably the easiest way to extend the default behavior of a library or framework. But how would the framework recognize that your subclass should be used instead of a standard component?',
        'The solution is to reduce the code that constructs components across the framework into a single factory method and let anyone override this method in addition to extending the component itself.',
        'Let’s see how that would work. Imagine that you write an app using an open source UI framework. Your app should have round buttons, but the framework only provides square ones. You extend the standard Button class with a glorious RoundButton subclass. But now you need to tell the main UIFramework class to use the new button subclass instead of a default one.',
        'To achieve this, you create a subclass UIWithRoundButtons from a base framework class and override its createButton method. While this method returns Button objects in the base class, you make your subclass return RoundButton objects. Now use the UIWithRoundButtons class instead of UIFramework. And that’s about it!',
        'Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.',
        'You often experience this need when dealing with large, resource-intensive objects such as database connections, file systems, and network resources.',
        'Let’s think about what has to be done to reuse an existing object:',
        '1. First, you need to create some storage to keep track of all of the created objects.',
        '2. When someone requests an object, the program should look for a free object inside that pool.',
        '3. … and then return it to the client code.',
        '4. If there are no free objects, the program should create a new one (and add it to the pool).',
        'That’s a lot of code! And it must all be put into a single place so that you don’t pollute the program with duplicate code.',
        'Probably the most obvious and convenient place where this code could be placed is the constructor of the class whose objects we’re trying to reuse. However, a constructor must always return new objects by definition. It can’t return existing instances.',
        'Therefore, you need to have a regular method capable of creating new objects as well as reusing existing ones. That sounds very much like a factory method.',

    ],
    HowtoImplement:[
        '1. Map out a matrix of distinct product types versus variants of these products.',
        '2. Declare abstract product interfaces for all product types. Then make all concrete product classes implement these interfaces.',
        '3. Declare the abstract factory interface with a set of creation methods for all abstract products.',
        '4. Implement a set of concrete factory classes, one for each product variant.',
        '5. Create factory initialization code somewhere in the app. It should instantiate one of the concrete factory classes, depending on the application configuration or the current environment. Pass this factory object to all classes that construct products.',
        '6. Scan through the code and find all direct calls to product constructors. Replace them with calls to the appropriate creation method on the factory object.',
    ],
    Pros:[
        ' You can be sure that the products you’re getting from a factory are compatible with each other.',
        ' You avoid tight coupling between concrete products and client code.',
        ' Single Responsibility Principle. You can extract the product creation code into one place, making the code easier to support.',
        ' Open/Closed Principle. You can introduce new variants of products without breaking existing client code.',

    ],
    Cons:[
        ' The code may become more complicated than it should be, since a lot of new interfaces and classes are introduced along with the pattern.',
    ],
    RelationswithOtherPatterns:[
        'Many designs start by using Factory Method (less complicated and more customizable via subclasses) and evolve toward Abstract Factory, Prototype, or Builder (more flexible, but more complicated).',
        'Builder focuses on constructing complex objects step by step. Abstract Factory specializes in creating families of related objects. Abstract Factory returns the product immediately, whereas Builder lets you run some additional construction steps before fetching the product.',
        'Abstract Factory classes are often based on a set of Factory Methods, but you can also use Prototype to compose the methods on these classes.',
        'Abstract Factory can serve as an alternative to Facade when you only want to hide the way the subsystem objects are created from the client code.',
        'You can use Abstract Factory along with Bridge. This pairing is useful when some abstractions defined by Bridge can only work with specific implementations. In this case, Abstract Factory can encapsulate these relations and hide the complexity from the client code.',
        'Abstract Factories, Builders and Prototypes can all be implemented as Singletons.',

    ],
    Image: [
        AbstractFactory,
        Problem1,
        Problem2,
        Solution1,
        Solution2,
        Solution3,
        Structure1,
    ],
}

