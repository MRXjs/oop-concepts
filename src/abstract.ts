abstract class Mage {
  abstract attack(): void;
}
class Wizard extends Mage {
  attack(): void {}
}
abstract class Witch extends Mage {}
// when you extends abstract class its have abstrack  method then need to implement that all methods or extends class need to abstract
