if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/rahulbhanushali/.gradle/caches/8.12/transforms/29cfed04f710f44eb937054d0736ce7e/transformed/hermes-android-0.78.0-release/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/rahulbhanushali/.gradle/caches/8.12/transforms/29cfed04f710f44eb937054d0736ce7e/transformed/hermes-android-0.78.0-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

