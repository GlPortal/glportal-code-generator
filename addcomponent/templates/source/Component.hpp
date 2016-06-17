#ifndef <%= includeGuard %>_HPP
#define <%= includeGuard %>_HPP

#include <radix/component/Component.hpp>

#include <serine/Archiver.hpp>

namespace glPortal {

class <%= className %> : public radix::Component {
public:

  <%= className %>(radix::Entity &ent) : Component(ent){
  }

  const char* getName() const {
    return "<%= className %>";
  }

  TypeId getTypeId() const {
    return Component::getTypeId<std::remove_reference<decltype(*this)>::type>();
  }

  void serialize(serine::Archiver &ar) {
  }
};

} /* namespace radix */

#endif /* <%= includeGuard %>_HPP */
